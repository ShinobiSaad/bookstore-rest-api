const CartItem = require("../models/cart");

exports.addToCart = async (userId, bookId, quantity) => {
  return CartItem.create({ userId, bookId, quantity });
};

exports.getCart = async (userId) => {
  return CartItem.find({ userId }).populate("bookId");
};

exports.removeFromCart = async (userId, itemId) => {
  return CartItem.findOneAndDelete({ userId, _id: itemId });
};
