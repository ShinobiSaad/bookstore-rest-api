const mongoose = require("mongoose");

const bookSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please enter title of the book"],
    },
    author: {
      type: String,
      required: [true, "Please enter author name of the book"],
    },
    genre: {
      type: String,
      required: false,
    },
    publicationDate: {
      type: Date,
      required: [true, "Please enter publication date of the book"],
    },
    price: {
      type: Number,
      required: [true, "Please enter price of the book"],
    },
  },
  {
    timestamps: true,
  }
);

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
