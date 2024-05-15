const express = require("express");
const router = express.Router();
const bookController = require("../controllers/bookController");

// Routes for the REST request

router.post("/", bookController.createBook); // Posting the new Books
router.get("/", bookController.getAllBooks); // Getting the Books
router.get("/search", bookController.searchBooks); // Searching the Books
router.get("/:id", bookController.getBookById); // Getting the Books by id
router.put("/:id", bookController.updateBook); // Updating the Books
router.delete("/:id", bookController.deleteBook); // Deleting the Books

module.exports = router;
