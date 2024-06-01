const staff = require('../../models/static/staff/staff');
const staff_transactional = require('../../models/transactional/staff');
const staff_logs = require('../../models/logs/staff');
const staff_attendence = require('../../models/attendence/staff');

const docsUpload = require('../../blob/azureBlob');

const staffEntryExit = async (req, res) => {
    try {
        const uuid = req.query.uuid;
        const photo = req.files.photo;
        
        const match = await staff_transactional.findOne({ uuid: uuid });

        const current_time = new Date();
        const istDateTime = current_time.toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

        if(match){
            const photoUrl = await docsUpload(photo.tempFilePath, "staff");

            const update = await staff_transactional.updateOne({ uuid: uuid }, { photo_entry: photoUrl });

            

            const updateData = await staff_attendence.updateOneOne({ uuid: uuid },{});



        }


    }
    catch (error) {
        console.log("This is error from ./controller/security/staffEntryExit.js");
        console.log(error);
        res.status(500).send();
    }

}

module.exports = staffEntryExit;