const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cartController");

router.post("/add", cartController.addToCart);
router.get("/", cartController.getCart);
router.delete("/:id", cartController.removeFromCart);

module.exports = router;
