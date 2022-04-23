const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
    }, 
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true
    }, 
    password: {
        type: String,
        trim: true,
        required: true,
    },
    userTypeId: {
        type: mongoose.Schema.Types.ObjectId
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;