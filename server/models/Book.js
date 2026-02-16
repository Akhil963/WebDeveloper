const mongoose = require("mongoose");

delete mongoose.models.Book;

const bookSchema = new mongoose.Schema(
  {
    title: String,
    price: Number,
    image: String,
    pdfPath: String,
  },
  { collection: "books" }
);

module.exports = mongoose.model("Book", bookSchema);
