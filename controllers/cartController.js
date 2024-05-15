const cartService = require("../services/cartService");

exports.addToCart = async (req, res) => {
  try {
    const { userId, bookId, quantity } = req.body;
    await cartService.addToCart(userId, bookId, quantity);
    res.sendStatus(204);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

exports.getCart = async (req, res) => {
  try {
    const userId = req.user._id;
    const cart = await cartService.getCart(userId);
    res.status(200).json(cart);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

exports.removeFromCart = async (req, res) => {
  try {
    const { userId } = req.params;
    const itemId = req.params.id;
    await cartService.removeFromCart(userId, itemId);
    res.sendStatus(204);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};
