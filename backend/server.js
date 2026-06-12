const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const productRoutes = require("./routes/productRoutes");

const app = express();

app.use(cors());
app.use(express.json());


mongoose.connect("mongodb://appUser:haslo@192.168.1.17:27017/twojaBaza?authSource=admin")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB error:", err));

app.use("/products", productRoutes);

app.listen(5000, () => {
  console.log("Server running on 5000");
});