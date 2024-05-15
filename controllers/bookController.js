const bookService = require("../services/bookService");
const Book = require("../models/book");

// Create data for Book model
exports.createBook = async (req, res) => {
  try {
    const book = await bookService.createBook(req.body);
    res.status(200).json(book);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

// Read data for Book model
exports.getAllBooks = async (req, res) => {
  try {
    const books = await bookService.getAllBooks();
    res.status(200).json(books);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

// Get Book by ID
exports.getBookById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await bookService.getBookById(id);
    if (!book) {
      return res
        .status(404)
        .json({ message: `Unable to find Book with ID ${id}` });
    }
    res.status(200).json(book);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

// Search the Books
exports.searchBooks = async (req, res) => {
  try {
    const { title, author, genre, publicationDate, price } = req.query;
    const query = {};

    if (title) {
      query.title = { $regex: new RegExp(title, "i") };
    }

    if (author) {
      query.author = { $regex: new RegExp(author, "i") };
    }

    if (genre) {
      query.genre = { $regex: new RegExp(genre, "i") };
    }

    if (publicationDate) {
      query.publicationDate = { $regex: new RegExp(publicationDate, "i") };
    }

    if (price) {
      query.price = { $eq: parseFloat(price) };
    }

    const books = await Book.find(query);
    if (books.length === 0) {
      return res
        .status(404)
        .json({ message: "No books found matching the search criteria" });
    }
    res.status(200).json(books);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

// Update data for Book model
exports.updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await bookService.updateBook(id, req.body);
    if (!book) {
      return res
        .status(404)
        .json({ message: `Unable to find Book with ID ${id}` });
    }
    res.status(200).json(book);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

// Delete data for Book model
exports.deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await bookService.deleteBook(id);
    if (!book) {
      return res
        .status(404)
        .json({ message: `Unable to find Book with ID ${id}` });
    }
    res.status(200).json(book);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};
