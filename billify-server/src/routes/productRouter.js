const express = require('express');
const { IsAuthenticated } = require('../middlewares/auth');

const router = express.Router();
const { AddProduct, CreateProduct, EditProduct, GetProducts, GetProduct } = require('../middlewares/product');

router.post('/addProduct', IsAuthenticated, AddProduct);
router.post('/createProduct', IsAuthenticated, CreateProduct);
router.put('/editProduct', IsAuthenticated, EditProduct);
router.get('/getProducts', IsAuthenticated, GetProducts);
router.get('/getProduct', IsAuthenticated, GetProduct);

module.exports = router;