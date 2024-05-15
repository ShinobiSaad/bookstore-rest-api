const bookService = require("../services/bookService");

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
