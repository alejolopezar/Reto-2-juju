const Book = require("../models/Books");

        
module.exports = {
  getBooks: async (input) => {
    if (input.year){
      const books = await Book.find(input);
      return books;
    }
    if (input.title){
      const books = await Book.find({title: new RegExp(`^${input.title}$`, 'i') });
      return books;
    }
    if (input.author){
      const books = await Book.find({author: new RegExp(`^${input.author}$`, 'i') });
      return books;
    }
    },

    createBook: async (inputData) => {
      const newBook = await Book.create(inputData);
      return newBook;
    },

    updateBook: async (id, title, author, year, state) => {
      const updatedBook = await Book.updateOne({ title: id },
        { $set: { title, author, year, state } });
      return updatedBook;
    },

    deleteBook: async (inputData) => {
      const deletedBook = await Book.deleteOne({title: new RegExp(`^${inputData.title}$`, 'i') });
      return deletedBook;
    }
};