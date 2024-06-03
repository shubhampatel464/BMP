const mongoose = require('mongoose');

const attendenceSchema = new mongoose.Schema({
    uuid:{
        type: String
    },
    month:{
        type: Number
    },
    year:{
        type: Number
    },
    attendence:{
        type: {
                day1:{
                    type : Number,
                },
                day2:{
                    type : Number,
                },
                day3:{
                    type : Number,
                },
                day4:{
                    type : Number,
                },
                day5:{
                    type : Number,
                },
                day6:{
                    type : Number,
                },
                day7:{
                    type : Number,
                },
                day8:{
                    type : Number,
                },
                day9:{
                    type : Number,
                },
                day10:{
                    type : Number,
                },
                day11:{
                    type : Number,
                },
                day12:{
                    type : Number,
                },
                day13:{
                    type : Number,
                },
                day14:{
                    type : Number,
                },
                day15:{
                    type : Number,
                },
                day16:{
                    type : Number,
                },
                day17:{
                    type : Number,
                },
                day18:{
                    type : Number,
                },
                day19:{
                    type : Number,
                },
                day20:{
                    type : Number,
                },
                day21:{
                    type : Number,
                },
                day22:{
                    type : Number,
                },
                day23:{
                    type : Number,
                },
                day24:{
                    type : Number,
                },
                day25:{
                    type : Number,
                },
                day26:{
                    type : Number,
                },
                day27:{
                    type : Number,
                },
                day28:{
                    type : Number,
                },
                day29:{
                    type : Number,
                },
                day30:{
                    type : Number,
                },
                day31:{
                    type : Number,
                }
        }
    }
});


const Attendence = mongoose.model('Attendence', attendenceSchema);

module.exports = Attendence;