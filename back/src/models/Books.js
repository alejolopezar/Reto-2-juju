const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    year: Number,
    state: String,
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;