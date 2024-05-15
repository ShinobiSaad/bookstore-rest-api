const orderService = require("../services/orderService");

// Adding data of Order
exports.placeOrder = async (req, res) => {
  try {
    const { userId, items, totalPrice } = req.body;
    await orderService.placeOrder(userId, items, totalPrice);
    res.sendStatus(201);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

// Getting data of history of orders
exports.getOrderHistory = async (req, res) => {
  try {
    const userId = req.user._id;
    const orders = await orderService.getOrderHistory(userId);
    res.status(200).json(orders);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};
