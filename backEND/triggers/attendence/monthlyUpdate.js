const cron = require('node-cron');

const staff_attendence = require('../../models/attendence/staff');

const staff = require('../../models/static/staff/staff');

const updateAttendence = async () => {
    try {

        // SEND EMAIL OF ATTENDENCE TO ADMIN


        console.log("UPDATED");

        const data = await staff_attendence.find({}).exec();

        const temp = data.forEach(async (element) => {
            const attendence = new staff_attendence({
                uuid: element.uuid,
                month: new Date().getMonth(),
                year: new Date().getFullYear(),
                attendence: {
                    1: 0,
                    2: 0,
                    3: 0,
                    4: 0,
                    5: 0,
                    6: 0,
                    7: 0,
                    8: 0,
                    9: 0,
                    10: 0,
                    11: 0,
                    12: 0,
                    13: 0,
                    14: 0,
                    15: 0,
                    16: 0,
                    17: 0,
                    18: 0,
                    19: 0,
                    20: 0,
                    21: 0,
                    22: 0,
                    23: 0,
                    24: 0,
                    25: 0,
                    26: 0,
                    27: 0,
                    28: 0,
                    29: 0,
                    30: 0,
                    31: 0
                }
            });

            await staff_attendence.deleteOne({ uuid: element.uuid});

            await attendence.save();

        });
        

    }
    catch (error) {
        console.log("This is error from ./triggers/attendence/monthlyUpdate.js");
        console.log(error);
    }
}

module.exports = updateAttendence;





