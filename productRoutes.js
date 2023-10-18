const express = require('express');

const router = express.Router();

// Sample data storage (you may replace this with a database or any other data storage)
const products = [];

// Create a product
router.post('/products', (req, res) => {
  const { name, description, price, category } = req.body;

  if (!name || !description || !price || !category) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const product = {
    id: products.length + 1,
    name,
    description,
    price,
    category,
  };

  products.push(product);
  res.status(201).json(product);
});

// Read a list of products
router.get('/products', (req, res) => {
  res.json(products);
});

// Update a product
router.put('/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return res.status(404).json({ error: 'Product not found' });
  }

  const { name, description, price, category } = req.body;
  if (name) product.name = name;
  if (description) product.description = description;
  if (price) product.price = price;
  if (category) product.category = category;

  res.json(product);
});

// Delete a product
router.delete('/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const productIndex = products.findIndex((p) => p.id === productId);

  if (productIndex === -1) {
    return res.status(404).json({ error: 'Product not found' });
  }

  products.splice(productIndex, 1);
  res.status(204).send();
});

module.exports = router;
