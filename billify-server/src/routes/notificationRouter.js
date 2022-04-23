// const express = require('express')
// const router = express.Router()
// const Bill = require('../models/Bill');
// const Product = require('../models/Product')
// const {IsAuthenticated} = require('../middlewares/auth');
// const Shopkeeper = require('../models/Shopkeeper');
// const Customer = require('../models/Customer')

// // for shopkeepers to get top customers between two intervals

// router.get('/notification',IsAuthenticated,  async (req, res) => {
//     const body = req.body;
//     const {bill} = body;
//     console.log('running Notification');
//     try{
//         const bill = new Bill({
//             items,
//             shopId,
//             customerId,
//             amount
//         })
//         console.log('runningi2')
//         await bill.save();

//         res.status(201).send(bill);
//     }catch(e){
//         res.status(400).send(e);
//     }
// })

// module.exports = router