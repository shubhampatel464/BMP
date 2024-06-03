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
        type: String,
        default: Date.now
    },
    exit_time: {
        type: String
    },
    photo:{
        type: String
    }
});

module.exports = mongoose.model('visitor_transactional', visitorSchema);
// Path: backEND/models/transactional/visitor.js

