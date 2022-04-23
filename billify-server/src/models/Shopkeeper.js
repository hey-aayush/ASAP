const mongoose = require('mongoose');

const shopkeeperSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
    }, 
    shopName: {
        type: String,
        trim: true,
        required: true,
    }, 
    storeId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    }, 
    email: {
        type: String,
        trim: true,
        required: true,
    }, 
    password: {
        type: String,
        trim: true,
        required: true,
    }, 
    bills: [
        {
            type: mongoose.Schema.Types.ObjectId
        }
    ],
    customerIdList: [
        {
            type: mongoose.Schema.Types.ObjectId
        }
    ]
});

const Shopkeeper = mongoose.model('Shopkeeper', shopkeeperSchema);

module.exports = Shopkeeper;