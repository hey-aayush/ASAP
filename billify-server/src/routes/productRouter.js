const express = require('express');
const { IsAuthenticated } = require('../middlewares/auth');

const router = express.Router();
const { AddProduct, CreateProduct, EditProduct } = require('../middlewares/product');

router.post('/addProduct', IsAuthenticated, AddProduct);
router.post('/createProduct', IsAuthenticated, CreateProduct);
router.put('/editProduct', IsAuthenticated, EditProduct);

module.exports = router;