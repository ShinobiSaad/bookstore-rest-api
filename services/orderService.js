const Order = require("../models/order");

exports.placeOrder = async (userId, items, totalPrice) => {
  return Order.create({ userId, items, totalPrice });
};

exports.getOrderHistory = async (userId) => {
  return Order.find({ userId }).populate("items.bookId");
};
