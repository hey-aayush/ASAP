const express = require('express')
const router = new express.Router()
const Bill = require('../models/Bill');
const Product = require('../models/Product')


// for shopkeepers to get top customers between two intervals

router.get('/billing/topcustomers', async(req, res) =>{
    const body = req.body;
    const {shopId, startDate, endDate} = body;


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

router.get('/billing/products', async(req, res) =>{
    const body = req.body;
    const {customerId, startDate, endDate, tag} = body;

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