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
        type: [
            {
                1:{
                    type : String,
                },
                2:{
                    type : String,
                },
                3:{
                    type : String,
                },
                4:{
                    type : String,
                },
                5:{
                    type : String,
                },
                6:{
                    type : String,
                },
                7:{
                    type : String,
                },
                8:{
                    type : String,
                },
                9:{
                    type : String,
                },
                10:{
                    type : String,
                },
                11:{
                    type : String,
                },
                12:{
                    type : String,
                },
                13:{
                    type : String,
                },
                14:{
                    type : String,
                },
                15:{
                    type : String,
                },
                16:{
                    type : String,
                },
                17:{
                    type : String,
                },
                18:{
                    type : String,
                },
                19:{
                    type : String,
                },
                20:{
                    type : String,
                },
                21:{
                    type : String,
                },
                22:{
                    type : String,
                },
                23:{
                    type : String,
                },
                24:{
                    type : String,
                },
                25:{
                    type : String,
                },
                26:{
                    type : String,
                },
                27:{
                    type : String,
                },
                28:{
                    type : String,
                },
                29:{
                    type : String,
                },
                30:{
                    type : String,
                },
                31:{
                    type : String,
                }

            }
        ]
    }
});


const Attendence = mongoose.model('Attendence', attendenceSchema);

module.exports = Attendence;