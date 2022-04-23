const mongoose = require('mongoose');
const Bill = require('./Bill');

const notificationSchema = mongoose.Schema({
    billId: {
        type: mongoose.Schema.Types.ObjectId,
    },
    read: {
        type: Boolean
    }
}, {
    timestamps: true
})

const Notification = mongoose.model('Notification', notificationSchema);

module.exports = Notification;