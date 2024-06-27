const dateJS = require('dates-in-js');


const staff = require('../../models/static/staff/staff');
const staff_transactional = require('../../models/transactional/staff');
const staff_logs = require('../../models/logs/staff');
const staff_attendence = require('../../models/attendence/staff');
const security = require('../../models/static/security/security');
const shift = require('../../models/securityShifts/currentShift');


const docsUpload = require('../../blob/azureBlob');

const current_time = new Date();
const options = {
    timeZone: "Asia/Kolkata",
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
};
const istDateTime = current_time.toLocaleString("en-IN", options);



// // Creating a new date object
const currentDate = new dateJS();

// // Accessing date components
// console.log(currentDate.year); // 2023
// console.log(currentDate.yr);   // 6
// console.log(currentDate.month); // September
// console.log(currentDate.mon);   // Sep
// console.log(currentDate.day);   // Wednesday
// console.log(currentDate.dy);    // Wed
// console.log(currentDate.date);  // 6
// console.log(currentDate.hours); // 11
// console.log(currentDate.mins);  // 13
// console.log(currentDate.secs);  // 45

const staffEntryExit = async (req, res) => {
    try {
        const uuid = req.body.uuid;
        const photo = req.files.photo;

        const match = await staff_transactional.findOne({ uuid: uuid });

        const current_time = new Date();
        const options = {
            timeZone: "Asia/Kolkata",
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
        };
        const istDateTime = current_time.toLocaleString("en-IN", options);


        if (match) {
            // upload photo to blob
            const photoUrl = await docsUpload(photo.tempFilePath, "staff");

            // save photo to transactional
            // const update = await staff_transactional.updateOne({ uuid: uuid }, { photo_exit: photoUrl });


            // save to logs
            // const data = await staff_transactional.findOne({ uuid: uuid });


            const logs = new staff_logs({
                uuid: uuid,
                name: match.name,
                mobile: match.mobile,
                photo_exit: photoUrl,
                photo_entry: match.photo_entry,
                entry_time: match.entry_time,
                exit_time: istDateTime,
                exit_authorised_by: req.user.name,
                entry_authorised_by: match.entry_authorised_by
            });

            const saveLogs = await logs.save();

            // delete from transactional
            const deleteData = await staff_transactional.deleteOne({ uuid: uuid });

            const resData = {
                entry: false
            };

            res.status(200).send(resData);

        }
        else {

            // fetch details from Staff Database
            const staffData = await staff.findOne({ uuid: uuid });

            // save photo to blob
            const photoUrl = await docsUpload(photo.tempFilePath, "staff");

            const data = new staff_transactional({
                name: staffData.name,
                mobile: staffData.mobile,
                uuid: uuid,
                photo_entry: photoUrl,
                entry_time: istDateTime,
                entry_authorised_by: req.user.name
            });

            const saveData = await data.save();

            // attendence update



            const department = staffData.department;



            const todaysDate = currentDate.date;
            const updateFields = {};
            updateFields[`attendence.day${todaysDate}.time`] = new Date();

            // Last time is 9:30 AM
            if(department != "Security"){
                if(currentDate.hours > 9 || (currentDate.hours == 9 && currentDate.mins > 30)){
                    updateFields[`attendence.day${todaysDate}.late`] = true;
                }
            }
            else{
                
                const shiftData = await shift.findOne({});
                const usersShift = shiftData.shift1.includes(uuid) ? '1' : shiftData.shift2.includes(uuid) ? '2' : shiftData.shift3.includes(uuid) ? '3' : null;

                if(usersShift == '1'){
                    if(currentDate.hours > 7 || (currentDate.hours == 7 && currentDate.mins > 30)){
                        updateFields[`attendence.day${todaysDate}.late`] = true;
                    }
                }
                else if(usersShift == '2'){
                    if(currentDate.hours > 15 || (currentDate.hours == 15 && currentDate.mins > 30)){
                        updateFields[`attendence.day${todaysDate}.late`] = true;
                    }
                }
                else if(usersShift == '3'){
                    if(currentDate.hours > 23 || (currentDate.hours == 23 && currentDate.mins > 30)){
                        updateFields[`attendence.day${todaysDate}.late`] = true;
                    }
                }

            }

            updateFields[`attendence.day${todaysDate}.time`] = new Date();
            const updateData = await staff_attendence.updateOne({ uuid: uuid }, { $set: updateFields });

            const resData = {
                entry: true
            };

            // response to client
            res.status(200).send(resData);

        }


    }
    catch (error) {
        console.log("This is error from ./controller/security/staffEntryExit.js");
        console.log(error);
        res.status(500).send();
    }

}



module.exports = staffEntryExit;