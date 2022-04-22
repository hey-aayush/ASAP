const mongoose = require('mongoose');

const shopSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
    }, 
    shopkeepername: {
        type: String,
        trim: true,
        required: true,
    }, 
    storeid: {
        type: String,
        trim: true,
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
    }
});

const Shop = mongoose.model('Shop', shopSchema);

module.exports = Shop;