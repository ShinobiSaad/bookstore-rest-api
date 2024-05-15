require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const app = express();

const collectionName = "bookstore-api";
const username = unescape(process.env.ADMIN_USERNAME);
const password = encodeURIComponent(process.env.ADMIN_PASSWORD);

const Book = require("./models/book.js");

const port = process.env.PORT || 3000;

app.use(express.json()); // JSON middleware

app.get("/", (req, res) => {
  res.send("APP RUNNING");
});

// Create data for Book model
app.post("/book", async (req, res) => {
  try {
    const book = await Book.create(req.body);
    res.status(200).json(book);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

// Read data for Book model
app.get("/book", async (req, res) => {
  try {
    const book = await Book.find({});
    res.status(200).json(book);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

// Update data for Book model
app.put("/book/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByIdAndUpdate(id, req.body);
    if (!book) {
      return res
        .status(404)
        .json({ message: `Unable to find Book with ID ${id}` });
    }
    const bookUpdated = await Book.findById(id);
    res.status(200).json(bookUpdated);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

// Delete data for Book model
app.delete("/book/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByIdAndDelete(id);
    if (!book) {
      return res
        .status(404)
        .json({ message: `Unable to find Book with ID ${id}` });
    }
    res.status(200).json(book);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

// Get Book by ID
app.get("/book/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    res.status(200).json(book);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

// Connecting to the MongoDB Cluster
mongoose
  .connect(
    "mongodb+srv://" +
      username +
      ":" +
      password +
      "@cluster0.2yrj1tc.mongodb.net/" +
      collectionName +
      "?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("MongoDB Cluster Connected");
    app.listen(port, () => console.log("API running on 3000"));
  })
  .catch((err) => {
    console.log("Error Connecting to MongoDB === ", err);
  });
