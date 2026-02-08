/**************************************************
 * LOAD ENV FIRST
 **************************************************/
require("dotenv").config({ path: "./.env" });

/**************************************************
 * IMPORTS
 **************************************************/
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
const Razorpay = require("razorpay");
const crypto = require("crypto");

/**************************************************
 * CREATE APP (VERY IMPORTANT: FIRST)
 **************************************************/
const app = express();

/**************************************************
 * MIDDLEWARE
 **************************************************/
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

/**************************************************
 * MODELS
 **************************************************/
const Employee = require("./models/Employee");

/**************************************************
 * MONGODB CONNECTION
 **************************************************/
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Atlas connected"))
  .catch((err) => console.error("❌ MongoDB error:", err));

mongoose.connection.once("open", () => {
  console.log("CONNECTED TO DB:", mongoose.connection.name);
});

/**************************************************
 * DEBUG ROUTE (TEMP – VERY IMPORTANT)
 **************************************************/
app.get("/debug-db", async (req, res) => {
  const collections = await mongoose.connection.db
    .listCollections()
    .toArray();

  const books = await mongoose.connection.db
    .collection("books")
    .find({})
    .toArray();

  res.json({
    db: mongoose.connection.name,
    collections: collections.map((c) => c.name),
    booksCount: books.length,
    booksSample: books,
  });
});

/**************************************************
 * BOOK ROUTES (DIRECT DB – GUARANTEED)
 **************************************************/
app.get("/books", async (req, res) => {
  const books = await mongoose.connection.db
    .collection("books")
    .find({})
    .toArray();

  console.log("RAW BOOK COUNT:", books.length);

  const fixedBooks = books.map((b) => ({
    ...b,
    pdfUrl: `http://localhost:3001/download/${b._id}`,
  }));

  res.json(fixedBooks);
});

app.get("/download/:id", async (req, res) => {
  const book = await mongoose.connection.db
    .collection("books")
    .findOne({ _id: new mongoose.Types.ObjectId(req.params.id) });

  if (!book) return res.status(404).send("Book not found");

  res.download(book.pdfPath);
});

/**************************************************
 * AUTH ROUTES
 **************************************************/
app.post("/register", async (req, res) => {
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
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await Employee.findOne({ email });
  if (!user || user.password !== password)
    return res.status(400).json({ message: "Invalid credentials" });

  res.json({ token: "dummy-token", user });
});

/**************************************************
 * RAZORPAY
 **************************************************/
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_SECRET,
});

app.post("/create-order", async (req, res) => {
  const { amount } = req.body;

  const order = await razorpay.orders.create({
    amount: amount * 100,
    currency: "INR",
  });

  res.json(order);
});

app.post("/verify-payment", async (req, res) => {
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
    downloadUrl: `http://localhost:3001/download/${bookId}`,
  });
});

/**************************************************
 * SERVER START
 **************************************************/
app.listen(process.env.PORT || 3001, () => {
  console.log("🚀 Server running on port 3001");
});
