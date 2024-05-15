const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: [true, "Please enter UserId of the Buyer"],
  },
  items: [
    {
      bookId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Book",
        required: [true, "Please enter BookId of the Book"],
      },
      quantity: {
        type: Number,
        required: [true, "Please enter quantity of books"],
      },
    },
  ],
  totalPrice: {
    type: Number,
    required: [true, "Please enter total price of books"],
  },
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
