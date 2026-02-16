// Load environment variables FIRST
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

console.log("MONGO:", process.env.MONGO_URI ? "Exists" : "Missing");
console.log("RAZORPAY KEY:", process.env.RAZORPAY_KEY_ID ? "Exists" : "Missing");
console.log("RAZORPAY SECRET:", process.env.RAZORPAY_SECRET ? "Exists" : "Missing");

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
const Razorpay = require("razorpay");
const crypto = require("crypto");

const app = express();

// ------------------- Middleware ------------------- //
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

const Employee = require("./models/Employee");

// ------------------- MongoDB Connection ------------------- //
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Atlas connected"))
  .catch((err) => {
    console.error("❌ MongoDB error:", err);
    process.exit(1);
  });

// ------------------- ROUTES ------------------- //

// Get Books
app.get("/api/books", async (req, res) => {
  try {
    const books = await mongoose.connection.db
      .collection("books")
      .find({})
      .toArray();

    const fixedBooks = books.map((b) => ({
      ...b,
      pdfUrl: `/api/download/${b._id}`,
    }));

    res.json(fixedBooks);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch books" });
  }
});

// Download PDF
app.get("/api/download/:id", async (req, res) => {
  try {
    const book = await mongoose.connection.db
      .collection("books")
      .findOne({ _id: new mongoose.Types.ObjectId(req.params.id) });

    if (!book) return res.status(404).send("Book not found");

    res.download(book.pdfPath);
  } catch (err) {
    res.status(500).send("Download failed");
  }
});

// Register
app.post("/api/register", async (req, res) => {
  try {
    const { name, email, password, confirmPassword } = req.body;

    if (password !== confirmPassword)
      return res.status(400).json({ message: "Passwords do not match" });

    const existingUser = await Employee.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "Email already registered" });

    const employee = await Employee.create({ name, email, password });

    res.status(201).json({
      message: "Employee registered successfully",
      user: employee,
    });
  } catch (err) {
    res.status(500).json({ error: "Registration failed" });
  }
});

// Login
app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await Employee.findOne({ email });
    if (!user || user.password !== password)
      return res.status(400).json({ message: "Invalid credentials" });

    res.json({ token: "dummy-token", user });
  } catch (err) {
    res.status(500).json({ error: "Login failed" });
  }
});

// ------------------- Razorpay Setup ------------------- //

if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_SECRET) {
  console.error("❌ Razorpay keys missing!");
  process.exit(1);
}

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_SECRET,
});

// Create Order
app.post("/api/create-order", async (req, res) => {
  try {
    const { amount } = req.body;

    const order = await razorpay.orders.create({
      amount: amount * 100,
      currency: "INR",
    });

    res.json(order);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Order creation failed" });
  }
});

// Verify Payment
app.post("/api/verify-payment", async (req, res) => {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      bookId,
      userId,
    } = req.body;

    const body = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_SECRET)
      .update(body)
      .digest("hex");

    if (expectedSignature !== razorpay_signature)
      return res.status(400).json({ success: false });

    await Employee.findByIdAndUpdate(userId, {
      $push: {
        purchases: {
          itemId: bookId,
          itemType: "pdf",
          progress: 0,
        },
      },
    });

    res.json({
      success: true,
      downloadUrl: `/api/download/${bookId}`,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false });
  }
});

// ------------------- Serve React in Production ------------------- //

if (process.env.NODE_ENV === "production") {
  const clientPath = path.join(__dirname, "../client/build");

  app.use(express.static(clientPath));

  // FIX for Express 5 (no wildcard "*")
  app.use((req, res) => {
    res.sendFile(path.join(clientPath, "index.html"));
  });
}

// ------------------- Start Server ------------------- //

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
