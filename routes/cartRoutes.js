const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cartController");

router.post("/add", cartController.addToCart); // Posting new cart data
router.get("/", cartController.getCart); // Getting cart data
router.delete("/:id", cartController.removeFromCart); // Deleting cart data

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Cart
 *   description: API endpoints for managing shopping carts
 */

/**
 * @swagger
 * /cart:
 *   post:
 *     summary: Add books to the shopping cart
 *     tags: [Cart]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: string
 *               books:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       '200':
 *         description: Books added to the shopping cart successfully
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /cart:
 *   get:
 *     summary: Get the contents of the shopping cart
 *     tags: [Cart]
 *     parameters:
 *       - in: query
 *         name: userId
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the user whose shopping cart needs to be retrieved
 *     responses:
 *       '200':
 *         description: The contents of the shopping cart
 *       '404':
 *         description: Shopping cart not found for the specified user ID
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /cart:
 *   delete:
 *     summary: Clear the shopping cart
 *     tags: [Cart]
 *     parameters:
 *       - in: query
 *         name: userId
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the user whose shopping cart needs to be cleared
 *     responses:
 *       '200':
 *         description: Shopping cart cleared successfully
 *       '404':
 *         description: Shopping cart not found for the specified user ID
 *       '500':
 *         description: Internal server error
 */
