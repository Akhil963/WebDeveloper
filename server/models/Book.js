const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: String,
  price: Number,
  image: String,    
  pdfPath: String
});

module.exports = mongoose.model("Book", bookSchema);
