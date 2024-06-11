const mongoose = require('mongoose');

const parentSchema = new mongoose.Schema({
    uuid: {
        type: String,
        required: true,
        unique: true
    },
    student_id:{
        type : Number
    },
    name1: {
        type: String,
        required: true
    },
    name2: {
        type: String,
        required: true
    },
    mobile: {
        type: Number,
        required: true,
    },
    arrival_date:{
        type: Date,
        required: true
    },
    purpose:{
        type: String,
        required: true
    },
    entry_time:{
        type: Date,
        default: Date.now
    },
    exit_time:{
        type: Date,
        default: null
    },
    entry_photo1:{
        type: String
    },
    entry_photo2:{
        type: String
    },
    exit_photo1:{
        type: String
    },
    exit_photo2:{
        type: String
    }
});

module.exports = mongoose.model('Parent', parentSchema);