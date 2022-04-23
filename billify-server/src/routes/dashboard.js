const express = require('express')
const router = express.Router()
const Bill = require('../models/Bill');
const {IsAuthenticated} = require('../middlewares/auth');
const Shopkeeper = require('../models/Shopkeeper');

// for shopkeepers to get top customers between two intervals

router.get('/dashboard', IsAuthenticated, async(req, res) =>{
    
    const user = req.user;
    const shopkeeper = await Shopkeeper.findById(user.userTypeId);
    const shopId = shopkeeper.storeId;
    const {startTimeStamp, endTimeStamp} = req.query

    console.log(startTimeStamp)
    try{
        const bills = await Bill.find({
            created_At: {
                $gte: new Date(Number(startTimeStamp)).getDate(), 
                $lt: new Date(Number(endTimeStamp)).getDate()
            },
            shopId
        })

        var set = new Set();
        var sum = 0;
        for(var i=0; i<bills.length; i++){
            set.add(bills[i].customerId.toString());
            sum += bills[i].amount;
        }

        const obj = {
            'totalCustomers': set.size,
            'totalOrders': bills.length,
            'totalAmount': sum
        }
        
        res.send(obj);
    }catch(e) {
        console.log(e)
        res.status(400).json({
            error: e
        })
    }
})

module.exports = router
