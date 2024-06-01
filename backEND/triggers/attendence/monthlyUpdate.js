const cron = require('node-cron');

const staff_attendence = require('../../models/attendence/staff');

const staff = require('../../models/static/staff/staff');

const updateAttendence = async () => {
    try {

        const data = await staff.find({});

        const temp = data.forEach(async (element) => {
            const 
        });

        

    } catch (error) {
        console.log("This is error from ./triggers/attendence/monthlyUpdate.js");
        console.log(error);
    }
}

module.exports = updateAttendence;





