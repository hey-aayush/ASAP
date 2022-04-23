const mongoose = require('mongoose');

const storeSchema = mongoose.Schema({
    storeId: {
        type: String,
        trim: true,
        required: true,
    }, 
    productId: {
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