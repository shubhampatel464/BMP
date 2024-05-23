const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    student_id: {
        type: Number,
        unique: true,
        required: true
    },
    photo_exit:{
        type: String
    },
    photo_entry:{
        type: String
    },
});