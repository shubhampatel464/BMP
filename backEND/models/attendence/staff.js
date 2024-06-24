const mongoose = require('mongoose');


const attendenceSchema = new mongoose.Schema({
    uuid: {
        type: String
    },
    month: {
        type: Number,
        default: new Date().getMonth()+1
    },
    year: {
        type: Number,
        default: new Date().getFullYear()
    },
    attendence: {
        type: {
            day1: {
                type: Date,
            },
            day2: {
                type: Date,                
            },
            day3: {
                type: Date,                
            },
            day4: {
                type: Date,                
            },
            day5: {
                type: Date,                
            },
            day6: {
                type: Date,                
            },
            day7: {
                type: Date,                
            },
            day8: {
                type: Date,                
            },
            day9: {
                type: Date,                
            },
            day10: {
                type: Date,                
            },
            day11: {
                type: Date,                
            },
            day12: {
                type: Date,                
            },
            day13: {
                type: Date,                
            },
            day14: {
                type: Date,                
            },
            day15: {
                type: Date,                
            },
            day16: {
                type: Date,                
            },
            day17: {
                type: Date,                
            },
            day18: {
                type: Date,                
            },
            day19: {
                type: Date,                
            },
            day20: {
                type: Date,                
            },
            day21: {
                type: Date,                
            },
            day22: {
                type: Date,                
            },
            day23: {
                type: Date,                
            },
            day24: {
                type: Date,                
            },
            day25: {
                type: Date,                
            },
            day26: {
                type: Date,                
            },
            day27: {
                type: Date,                
            },
            day28: {
                type: Date,                
            },
            day29: {
                type: Date,                
            },
            day30: {
                type: Date,                
            },
            day31: {
                type: Date,                
            }
        },
        default: {
            day1: new Date(0),
            day2: new Date(0),
            day3: new Date(0),
            day4: new Date(0),
            day5: new Date(0),
            day6: new Date(0),
            day7: new Date(0),
            day8: new Date(0),
            day9: new Date(0),
            day10: new Date(0),
            day11: new Date(0),
            day12: new Date(0),
            day13: new Date(0),
            day14: new Date(0),
            day15: new Date(0),
            day16: new Date(0),
            day17: new Date(0),
            day18: new Date(0),
            day19: new Date(0),
            day20: new Date(0),
            day21: new Date(0),
            day22: new Date(0),
            day23: new Date(0),
            day24: new Date(0),
            day25: new Date(0),
            day26: new Date(0),
            day27: new Date(0),
            day28: new Date(0),
            day29: new Date(0),
            day30: new Date(0),
            day31: new Date(0)
        }
    }
});


const Attendence = mongoose.model('Attendence', attendenceSchema);

module.exports = Attendence;