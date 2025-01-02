const express = require("express");
const mongoose = require("mongoose");
const productRoutes = require("./routes/products.route");
const app = express();
require("dotenv").config();
app.use(express.json());

app.use("/api/products", productRoutes);

mongoose
  .connect(process.env.MONGO_LOCAL_URI)
  .then(() => {
    console.log("Connected to DB...");
    app.listen(3000, () => {
      console.log("Server is running on port 3000...");
    });
  })
  .catch(() => {
    console.log("Error Connecting to DB");
  });
