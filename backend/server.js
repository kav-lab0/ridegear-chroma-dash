const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB (update the URI if needed)
mongoose.connect('mongodb://localhost:27017/ridegear', { useNewUrlParser: true, useUnifiedTopology: true });

// Product Schema
const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  originalPrice: Number,
  image: String,
  category: String,
  brand: String,
  rating: Number,
  reviews: Number,
  inStock: Boolean,
  featured: Boolean,
  tags: [String]
});
const Product = mongoose.model('Product', productSchema);

// Get all products
app.get('/api/products', async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// Add a product
app.post('/api/products', async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.json(product);
});

app.listen(5000, () => console.log('Server running on port 5000')); 