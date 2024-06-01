const mongoose = require('mongoose');

const attendenceSchema = new mongoose.Schema({
    mobile:{
        type: Number
    },
    month:{
        type: Number
    },
    year:{
        type: Number
    },
    attendence:{
        type: {
                1:{
                    type : Number,
                },
                2:{
                    type : Number,
                },
                3:{
                    type : Number,
                },
                4:{
                    type : Number,
                },
                5:{
                    type : Number,
                },
                6:{
                    type : Number,
                },
                7:{
                    type : Number,
                },
                8:{
                    type : Number,
                },
                9:{
                    type : Number,
                },
                10:{
                    type : Number,
                },
                11:{
                    type : Number,
                },
                12:{
                    type : Number,
                },
                13:{
                    type : Number,
                },
                14:{
                    type : Number,
                },
                15:{
                    type : Number,
                },
                16:{
                    type : Number,
                },
                17:{
                    type : Number,
                },
                18:{
                    type : Number,
                },
                19:{
                    type : Number,
                },
                20:{
                    type : Number,
                },
                21:{
                    type : Number,
                },
                22:{
                    type : Number,
                },
                23:{
                    type : Number,
                },
                24:{
                    type : Number,
                },
                25:{
                    type : Number,
                },
                26:{
                    type : Number,
                },
                27:{
                    type : Number,
                },
                28:{
                    type : Number,
                },
                29:{
                    type : Number,
                },
                30:{
                    type : Number,
                },
                31:{
                    type : Number,
                }
        }
    }
});


const Attendence = mongoose.model('Attendence', attendenceSchema);

module.exports = Attendence;