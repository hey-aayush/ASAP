const express = require('express');
const { IsAuthenticated } = require('../middlewares/auth');

const router = express.Router();
const { GetCustomer, GetCustomers } = require('../middlewares/shopkeeper');

router.get('/getCustomer', IsAuthenticated ,GetCustomer);
router.get('/getCustomers', IsAuthenticated ,GetCustomers);

module.exports = router;