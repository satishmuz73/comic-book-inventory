const mongoose = require("mongoose");

const comicSchema = new mongoose.Schema({
  book_name: { type: String, required: true },
  author_name: { type: String, required: true },
  year: { type: Number, required: true },
  price: { type: Number, required: true },
  discount: { type: Number, default: 0 },
  condition: { type: String, enum: ["new", "used"], required: true },
  description: { type: String },
  stock: { type: Number, required: true },
});

module.exports = mongoose.model("Comic", comicSchema);