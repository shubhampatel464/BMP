const dateJS = require('dates-in-js');


const staff = require('../../models/static/staff/staff');
const staff_transactional = require('../../models/transactional/staff');
const staff_logs = require('../../models/logs/staff');
const staff_attendence = require('../../models/attendence/staff');

const docsUpload = require('../../blob/azureBlob');



const current_time = new Date();
const istDateTime = current_time.toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });


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
        const istDateTime = current_time.toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

        if (match) {
            // upload photo to blob
            const photoUrl = await docsUpload(photo.tempFilePath, "staff");

            // save photo to transactional
            const update = await staff_transactional.updateOne({ uuid: uuid }, { photo_exit: photoUrl });


            // save to logs
            const data = await staff_transactional.findOne({ uuid: uuid });

            const resData = {
                entry: false
            };

            const logs = new staff_logs({
                uuid: uuid,
                name: data.name,
                mobile: data.mobile,
                photo_exit: data.photo_exit,
                photo_entry: data.photo_entry,
                entry_time: data.entry_time,
                exit_time: istDateTime
            });

            const saveLogs = await logs.save();

            // delete from transactional
            const deleteData = await staff_transactional.deleteOne({ uuid: uuid });

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
                photo_exit: "",
                entry_time: istDateTime,
                exit_time: ""
            });

            const saveData = await data.save();

            // attendence update

            const todaysDate = currentDate.date;
            
            const updateFields = {};
            updateFields[`attendence.${todaysDate}`] = 1;

            const updateData = await staff_attendence.updateOne({ uuid: uuid },{$set : updateFields});
            
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