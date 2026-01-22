const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
const Razorpay = require("razorpay");
const crypto = require("crypto"); 

const app = express();


app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));


const Employee = require("./models/Employee");
const Book = require("./models/Book");


mongoose
  .connect("mongodb://127.0.0.1:27017/employeedb")
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error(err));


const razorpay = new Razorpay({
  key_id: "YOUR_KEY_ID",        // 🔴 PUT REAL KEY
  key_secret: "YOUR_SECRET",   // 🔴 PUT REAL SECRET
});


app.post("/register", async (req, res) => {
  try {
    const { name, email, password, confirmPassword } = req.body;

    if (!name || !email || !password || !confirmPassword) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    const existingUser = await Employee.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already registered" });
    }

    const employee = await Employee.create({
      name,
      email,
      password: password.trim(),
    });

    res.status(201).json({
      message: "Employee registered successfully",
      employee,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await Employee.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found" });

    if (user.password !== password.trim())
      return res.status(400).json({ message: "Invalid password" });

    res.json({
      message: "Login successful",
      token: "dummy-token",
      user,
    });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});



app.get("/add-book", async (req, res) => {
  await Book.create({
    title: "Physics Class 12 Notes",
    price: 299,
    image: "http://localhost:3001/uploads/physics.jpg", // ✅ IMAGE
    pdfPath: "uploads/physics.pdf",                     // ✅ PDF
  });

  res.send("Book added");
});


app.get("/books", async (req, res) => {
  const books = await Book.find();
  res.json(books);
});

app.get("/download/:id", async (req, res) => {
  const book = await Book.findById(req.params.id);
  if (!book) return res.status(404).send("Book not found");

  res.download(book.pdfPath);
});



app.post("/create-order", async (req, res) => {
  try {
    const { amount } = req.body;

    const order = await razorpay.orders.create({
      amount: amount * 100,
      currency: "INR",
    });

    res.json(order);
  } catch (err) {
    res.status(500).json({ message: "Payment error" });
  }
});


app.post("/verify-payment", async (req, res) => {
  const {
    razorpay_order_id,
    razorpay_payment_id,
    razorpay_signature,
    bookId,
  } = req.body;

  const body = razorpay_order_id + "|" + razorpay_payment_id;

  const expectedSignature = crypto
    .createHmac("sha256", "YOUR_SECRET") // 🔴 SAME SECRET
    .update(body)
    .digest("hex");

  if (expectedSignature === razorpay_signature) {
    res.json({
      success: true,
      downloadUrl: `http://localhost:3001/download/${bookId}`,
    });
  } else {
    res.status(400).json({ success: false });
  }
});


app.listen(3001, () => {
  console.log("Server started on port 3001");
});
