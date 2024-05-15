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

/**
 * @swagger
 * tags:
 *   name: Books
 *   description: API endpoints for managing books
 */

/**
 * @swagger
 * /book:
 *   get:
 *     summary: Get all books
 *     tags: [Books]
 *     responses:
 *       '200':
 *         description: A list of books
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /book:
 *   post:
 *     summary: Create a new book
 *     tags: [Books]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               author:
 *                 type: string
 *               genre:
 *                 type: string
 *               publicationDate:
 *                 type: string
 *               price:
 *                 type: number
 *     responses:
 *       '200':
 *         description: Book created successfully
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /book/{id}:
 *   get:
 *     summary: Get a book by ID
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the book to get
 *     responses:
 *       '200':
 *         description: Book details
 *       '404':
 *         description: Book not found
 *       '500':
 *         description: Internal server error
 */

// Add JSDoc comments for other book routes as needed...
