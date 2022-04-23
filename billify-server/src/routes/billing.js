const express = require('express')
const router = express.Router()
const Bill = require('../models/Bill');
const Product = require('../models/Product')
const {IsAuthenticated} = require('../middlewares/auth');
const Shopkeeper = require('../models/Shopkeeper');
const Customer = require('../models/Customer')
const Notification = require('../models/Notification')

// for shopkeepers to get top customers between two intervals

router.get('/billing/topcustomers', IsAuthenticated, async(req, res) =>{
    
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

        console.log(bills.length);
        if(!bills){
            return res.status(404).send()
        }
    
        const arr = sortByFrequency(bills);
        
        res.send(arr);
    }catch(e) {
        console.log(e)
        res.status(400).json({
            error: e
        })
    }
})

function sortByFrequency(arr) {
    var map = new Map();

    for(var i=0; i<arr.length; i++){
        //console.log(i);
        var a = arr[i].amount;

        if(map.has(arr[i].customerId)){
            console.log(arr[i].customerId)
            a += arr[i].amount;
        }
        
        map.set(arr[i].customerId.toString(), a);
        
    }


    var get_keys = map.entries();

    var temp = [];
    for(var ele of get_keys){
        var mongoose = require('mongoose');
        //console.log(ele)
        var id = mongoose.Types.ObjectId(ele[0]);
        //console.log('ele.. ', ele[1])
        const obj = {
            customerId : id,
            amount : ele[1]
        }
        temp.push(obj);
    }
    //console.log(temp.length);
    

    function compare( a, b ) {
        if ( a.amount < b.amount ){
          return -1;
        }
        if ( a.amount > b.amount ){
          return -1;
        }
        return 0;
      }
      
      temp.sort( compare );
      return temp;
}

// for customers to get bills between two dates and with filter

router.get('/billing/products', IsAuthenticated, async(req, res) =>{
    const {startTimeStamp, endTimeStamp, tag} = req.query;
    
    const user = req.user;
    
    const customer = await Customer.findById(user.userTypeId);
    console.log(user.userTypeId);

    const customerId = customer._id;
    
    const date = new Date(Number(startTimeStamp))
    console.log(date);
    console.log(new Date(Number(endTimeStamp)))
    console.log(customerId);
    try{
        const bills = await Bill.find({
            created_At: {
                $gte: new Date(Number(startTimeStamp)).getDate(), 
                $lt: new Date(Number(endTimeStamp)).getDate()
            },
            customerId
        })    
        
        //console.log('Bills..... ', bills)
        if(!bills){
            return res.status(404).send()
        }

        if(!tag){
            return res.send(bills);
        }

        const filteredItems = [];
        for(let i = 0; i<bills.length; i++){
            for(let j = 0; j<bills[i].items.length; j++){
                const productId = bills[i].items[j];
                //console.log(pro)
                const product = Product.find({_id: productId});
                if(product.tag === 'tag'){
                    filteredItems.push(bills[i].items[j]);
                }
            }
        }

        return res.send(filteredItems);

    }catch(e) {
       // console.log(e)
        res.status(400).json({
            error: e
        })
    }
})

router.post('/billing/generatebill',IsAuthenticated,  async (req, res) => {
    const body = req.body;
    const {items, shopId, customerId, amount} = body;
    
    try{
        const bill = new Bill({
            items,
            shopId,
            customerId,
            amount
        })
        
        await bill.save();

        // for notifications
        const customer = await Customer.findById(customerId);
        //console.log('customer: ', customer);
        const notification = new Notification({
            data: bill,
            read: false
        })

        await notification.save();

        
        if(!customer.notifications){
            customer.notifications = [];
        }
        //console.log(notification._id);
        customer.notifications.push(notification._id);
        customer.markModified('notifications')

        console.log(customer.notifications.length)

        await customer.save();

        const cust = await Customer.findById(customerId);
        console.log(cust);

        res.status(201).send(bill);
    }catch(e){
        console.log(e)
        res.status(400).send(e);
    }
})

module.exports = router