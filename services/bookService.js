const Book = require("../models/book");

exports.createBook = async (bookData) => {
  return Book.create(bookData);
};

exports.getAllBooks = async () => {
  return Book.find({});
};

exports.getBookById = async (id) => {
  return Book.findById(id);
};

exports.updateBook = async (id, newData) => {
  return Book.findByIdAndUpdate(id, newData, { new: true });
};

exports.deleteBook = async (id) => {
  return Book.findByIdAndDelete(id);
};
