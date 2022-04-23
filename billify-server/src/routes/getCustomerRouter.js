const express = require('express');

const router = express.Router();
const { GetCustomer, GetCustomers } = require('../middlewares/shopkeeper');

router.get('/getCustomer', GetCustomer);
router.get('/getCustomers', GetCustomers);

module.exports = router;