const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model");
const app = express();
require("dotenv").config();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.post("/api/products", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

mongoose
  .connect(process.env.MONGO_ATLAS_URI)
  .then(() => {
    console.log(process.env.MONGO_ATLAS_URI);
    console.log("Connected to DB...");
    app.listen(3000, () => {
      console.log("Server is running on port 3000...");
    });
  })
  .catch(() => {
    console.log("Error Connecting to DB");
  });
