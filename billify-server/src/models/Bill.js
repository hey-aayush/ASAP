const mongoose = require('mongoose');

const billSchema = mongoose.Schema({

    items: [{
        productId :{
            type: mongoose.Schema.Types.ObjectId,
            required: true,
        },
        quantity: {
            type: Number,
            required: true
        }
    }],
    amount: {
        type: Number,
        required: true
    },
    customerId:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    shopId:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    }

}, {
    timestamps: true
})

const Bill = mongoose.model('Product', billSchema);

module.exports = Bill;