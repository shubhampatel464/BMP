const mongoose = require('mongoose');

const parentLogsSchema = new mongoose.Schema({
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
        type: String,
        required: true,
        unique: true
    },
    arrival_date:{
        type: Date,
        required: true
    },
    purpose:{
        type: String,
        required: true
    },
});

module.exports = mongoose.model('ParentLogs', parentLogsSchema);