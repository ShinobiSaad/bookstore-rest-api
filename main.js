require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const app = express();

const collectionName = "bookstore-api";
const username = unescape(process.env.ADMIN_USERNAME);
const password = encodeURIComponent(process.env.ADMIN_PASSWORD);

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("APP RUNNING");
});

// Connection to the MongoDB Cluster
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