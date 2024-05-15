require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();

// MongoDB Configs
const collectionName = "bookstore-api";
const username = unescape(process.env.ADMIN_USERNAME);
const password = encodeURIComponent(process.env.ADMIN_PASSWORD);

// Importing routes for the Routes
const bookRoutes = require("./routes/bookRoutes");
const cartRoutes = require("./routes/cartRoutes");
const orderRoutes = require("./routes/orderRoutes");

// Importing Documentation
const docs = require("./Docs/swaggerSetup");

const port = process.env.PORT || 3000;

app.use(express.json()); // JSON middleware

// Routes
app.use("/book", bookRoutes);
app.use("/cart", cartRoutes);
app.use("/order", orderRoutes);

app.get("/", (req, res) => {
  res.send("APP RUNNING");
});

docs(app);
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
