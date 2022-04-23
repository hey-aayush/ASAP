// name
// email
// passwrord
// Address
// Bills[]

const mongoose = require('mongoose')
const validator = require('validator')

const customerSchema = mongoose.Schema({

    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 7,
        trim: true,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error('Password cannot contain "password"')
            }
        }
    },
    address: {
        type: String,
    },
    bills: [{
        type: mongoose.Schema.Types.ObjectId,
    }]
})

const Customer = mongoose.model('Product', customerSchema);

module.exports = Customer;
