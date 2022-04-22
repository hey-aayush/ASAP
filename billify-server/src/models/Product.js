const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
    }, 

    price: {
        type: Number, 
        required: true,
    }, 

    tag: {
        type: String,
        trim: true,
        required: true
    }
}, {
    timestamps: false
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;