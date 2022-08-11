const express = require('express');
const ProductModel = require('../models/productModel');

const router = express.Router();

// list-products
router.get('/products', async (_req, res) => {
  const products = await ProductModel.getAll();

  // res.send(products);
  return res.status(200).json(products);
});

// get-by-id
router.get('/products/:id', async (req, res) => {
  const product = await ProductModel.getById(req.params.id);

  if (!product) {
    return res.status(404).json({ message: 'Not found' });
  }

  // res.send(product);
  return res.status(200).json(product);
});

// add-product
router.post('/products', async (req, res) => {
  const { name, brand } = req.body;

  if (!name || !brand) {
    return res.status(400).json({ message: 'Dados inválidos' });
  }

  const newProduct = await ProductModel.add(name, brand);

  // res.send(newProduct);
  return res.status(201).json(newProduct);
});

// delete-product/:id
router.delete('/products/:id', async (req, res) => {
  const product = await ProductModel.getById(req.params.id);

  if (!product) {
    return res.status(404).json({ message: 'Not found' });
  }

  await ProductModel.exclude(req.params.id);
  // res.send(products);
  return res.status(200).json({ message: 'Excluído' });
});

// update-product/:id
router.put('/products/:id', async (req, res) => {
  const { name, brand } = req.body;

  if (!name|| !brand) {
    return res.status(400).json({ message: 'Dados inválidos' });
  }

  const product = await ProductModel.getById(req.params.id);

  if (!product) {
    return res.status(404).json({ message: 'Produto não encontrado' });
  }

  const products = await ProductModel.update(req.params.id, name, brand);
  // res.send(products);
  return res.status(200).json(products);
});

module.exports = router;