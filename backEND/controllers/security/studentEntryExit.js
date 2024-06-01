const student_transactional = require('../../models/transactional/student');
const student_logs = require('../../models/logs/student');
const student = require('../../models/static/students_alumni/student');

const docsUpload = require('../../blob/azureBlob');


const studentEntryExit = async (req, res) => {
    try {

        const uuid = req.body.uuid;
        const photo = req.files.photo;

        const match = await student_transactional.findOne({ uuid: uuid });

        const current_time = new Date();
        const istDateTime = current_time.toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

        if (match) {
            // save photo to blob 
            const photoUrl = await docsUpload(photo.tempFilePath, "student");

            const update = await student_transactional.updateOne({ uuid: uuid }, { photo_entry: photoUrl });

            // save to logs
            const data = await student_transactional.findOne({ uuid: uuid });
            const logs = new student_logs({
                student_id: data.student_id,
                photo_exit: data.photo_exit,
                photo_entry: data.photo_entry,
                isLongLeave: data.isLongLeave,
                reason: data.reason,
                entry_time: istDateTime,
                exit_time: data.exit_time
            });
            
            const saveLogs = await logs.save();

            // delete from transactional
            const now = new Date();
            const resData = {
                late: false,
                entry: true
            };
            // Check if the current time is before 12:00 AM
            if (!(now.getHours() < 24 && now.getHours() >= 0) && data.isLongLeave == false) {
                resData.late = true;
            } 

            const deleteData = await student_transactional.deleteOne({ uuid: uuid });


            res.status(200).send(resData);
            return;

        }

        else {

            // fetch details from Student Database
            const studentData = await student.findOne({ uuid: uuid });

            // save photo to blob
            const photoUrl = await docsUpload(photo.tempFilePath, "student");

            const data = new student_transactional({
                name: studentData.name,
                student_id: studentData.student_id,
                uuid: req.body.uuid,
                photo_exit: photoUrl,
                exit_time: istDateTime,
                isLongLeave: req.body.isLongLeave,
                reason: req.body.reason
            });

            const saveData = await data.save();
            const resData = {
                entry: false
            };
            res.status(200).send(resData);
            return;

        }

    } catch (error) {

        console.log("This is an error from ./controller/security/studentEntryExit.js");
        console.log(error);
        res.status(500).send();

    }
}

module.exports = studentEntryExit;

