const express = require('express')
const router = express.Router()
const Bill = require('../models/Bill');
const Product = require('../models/Product')
const {IsAuthenticated} = require('../middlewares/auth');
const Shopkeeper = require('../models/Shopkeeper');
const Customer = require('../models/Customer')

// for shopkeepers to get top customers between two intervals

router.get('/billing/topcustomers', IsAuthenticated, async(req, res) =>{
    
    const user = req.user;
    const shopkeeper = await Shopkeeper.findById(user.userTypeId);
    const shopId = shopkeeper.storeId;
    const {startDate, endDate} = req.query


    try{
        const bills = await Bill.find({
            createdAt: {
                $gte: startDate, 
                $lt: endDate
            },
            shopId
        })

        if(!bills){
            return res.status(404).send()
        }
    
        bills = sortByFrequency(bills);

        res.send(bills);
    }catch(e) {
        res.status(400).send(e);
    }
})

function sortByFrequency(array) {
    var frequency = {};

    array.forEach(function(value) { frequency[value] = 0; });

    var uniques = array.filter(function(value) {
        return ++frequency[value] == 1;
    });

    return uniques.sort(function(a, b) {
        return frequency[b] - frequency[a];
    });
}

// for customers to get bills between two dates and with filter

router.get('/billing/products', IsAuthenticated, async(req, res) =>{
    const {startDate, endDate, tag} = req.query;

    const user = req.user;
    const customer = await Customer.findById(user.userTypeId);
    const customerId = customer._id;

    try{
        const bills = await Bill.find({
            createdAt: {
                $gte: startDate, 
                $lt: endDate
            },
            customerId
        })    
        
        
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
                const product = Product.find({_id: productId});
                if(product.tag === 'tag'){
                    filteredItems.push(bills[i].items[j]);
                }
            }
        }

        return res.send(filteredItems);

    }catch(e) {
        res.status(400).send(e);
    }
})

router.post('/billing/generatebill',IsAuthenticated,  async (req, res) => {
    const body = req.body;
    const {items, shopId, customerId, amount} = body;
    console.log('running');
    try{
        const bill = new Bill({
            items,
            shopId,
            customerId,
            amount
        })
        console.log('runningi2')
        await bill.save();

        res.status(201).send(bill);
    }catch(e){
        res.status(400).send(e);
    }
})

module.exports = router