const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");


const app = express();

app.use(cors());

app.use(express.json());

mongoose.connect("mongodb://appUser:haslo@127
0.0.1:27017/twojaBaza?authSource=admin")
  .then(() => console.log("Database connected"))
  .catch((err) => console.log(err));

const userSchema = new mongoose.Schema({
  name: String,
  age: Number
});

const User = mongoose.model("User", userSchema);

app.post("/users", async (req, res) => {
    console.log("BODY:", req.body);
  try {
    const newUser = await User.create(req.body);
    res.json(newUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

app.delete("/users/:id", async (req, res) =>{
      try {
      const deleteUser = await User.findByIdAndDelete(req.params.id);
      res.json(deleteUser);
      } catch  (err) {
            res.status(500).json({ error: err.message})
      }
})
app.put("/users/:id", async (req, res) =>{
  try{
      const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedUser);
  } catch (err){
      res.status(500).json({error: err.message})
  }
});


const productSchema = new mongoose.Schema({
  product: String,
  price: Number
});

const Product = mongoose.model("Product", productSchema);

app.post("/products", async (req, res) => {
    try {
      const newProduct = await Product.create(req.body);
      res.json(newProduct)
    } catch (err) {
      res.status(500).json({error: err.message})
    }
})

app.get("/products", async (req, res) =>{
    const products = await Product.find();
    res.json(products)
});

app.delete("/products/:id", async (req, res) =>{
  try{
    const deleteProduct = await Product.findByIdAndDelete(req.params.id);
    res.json(deleteProduct);
  } catch (err){
    res.status(500).json({error: err.message})
  }

})

app.put("/products/:id", async (req, res) => {
  try {
    const updatedProdcut = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      {new: true}
    );
  
    req.json(updatedProdcut)
  } catch (err){
    res.status(500).json({error: err.message});
  }
})




app.listen(5000, () => {
  console.log("Server is running on port 5000");
});


