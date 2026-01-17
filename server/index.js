const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(express.json());

const Employee = require("./models/Employee");

mongoose
  .connect("mongodb://localhost:27017/employeedb")
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error(err));

app.post("/register", async (req, res) => {
  try {
    const { name, email, password, confirmPassword } = req.body;

    if (!name || !email || !password || !confirmPassword) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    const employee = await Employee.create({
      name,
      email,
      password,
    });

    return res.status(201).json({
      message: "Employee registered successfully",
      employee,
    });
  } catch (err) {
    return res.status(400).json({
      message: err.message,
    });
  }
});

// 🔥 THIS WAS MISSING
app.listen(3001, () => {
  console.log("Server started on port 3001");
});
