const mongoose = require('mongoose');

const visitorSchema = new mongoose.Schema({
    uuid: {
        type: String,
        required: true
    },
    name: {
        type: String
    },
    mobile: {
        type: String,
        required: true
    },
    purpose: {
        type: String,
        required: true
    },
    entry_time: {
        type: Date,
        default: Date.now
    },
    exit_time: {
        type: Date,
        default: null
    },
    photo:{
        type: String
    }
});

module.exports = mongoose.model('visitor_logs', visitorSchema);