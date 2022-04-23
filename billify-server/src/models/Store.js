const mongoose = require('mongoose');

const storeSchema = mongoose.Schema({
    storeId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    }, 
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    }, 
    quantity: {
        type: Number,
        required: true,
    }
});

const Store = mongoose.model('Store', storeSchema);

module.exports = Store;