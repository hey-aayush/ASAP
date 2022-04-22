const mongoose = require('mongoose');

const storeSchema = mongoose.Schema({
    storeid: {
        type: String,
        trim: true,
        required: true,
    }, 
    productid: {
        type: String,
        trim: true,
        required: true,
    }, 
    quantity: {
        type: Number,
        required: true,
    }
});

const Store = mongoose.model('Store', storeSchema);

module.exports = Store;