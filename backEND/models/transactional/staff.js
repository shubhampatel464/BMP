const mongoose = require('mongoose');

const staffSchema = new mongoose.Schema({
    name: {
        type: String
    },
    mobile: {
        type: Number,
        unique: true
    },
    uuid: {
        type: String,
        required: true
    },
    photo_exit:{
        type: String
    },
    photo_entry:{
        type: String
    },
    entry_time:{
        type: String
    },
    exit_time:{
        type: String
    }
});

const staff = mongoose.model('staff_transactional', staffSchema);

module.exports = staff;