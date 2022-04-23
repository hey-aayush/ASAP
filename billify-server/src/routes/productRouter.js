const express = require('express');

const router = express.Router();
const { AddProduct, CreateProduct } = require('../middlewares/product');

router.post('/addProduct', AddProduct);
router.post('/createProduct', CreateProduct);

module.exports = router;