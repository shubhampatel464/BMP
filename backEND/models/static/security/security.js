const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const securitySchema = new mongoose.Schema({
    name: {
        type: String
    },
    password: {
        type: String
    },
    mobile: {   
        type: Number,
        unique: true
    },
    startTime:{
        type: Date
    },
    endTime:{
        type: Date
    }
});

securitySchema.pre("save", (async function (next) {
    
    const password = this.password;

    const hashed_pass = await bcrypt.hash(password, 8);

    this.password = hashed_pass;
    next();
}
))

module.exports = mongoose.model('Security', securitySchema);
