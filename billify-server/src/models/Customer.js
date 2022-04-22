const mongoose = require('mongoose');

const customerSchema = mongoose.Schema({
    name: {
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
    }, 

});

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;