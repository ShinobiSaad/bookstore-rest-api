const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");

router.post("/", orderController.placeOrder);
router.get("/", orderController.getOrderHistory);

module.exports = router;
