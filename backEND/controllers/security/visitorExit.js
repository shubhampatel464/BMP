const visitor_transactional = require('../../models/transactional/visitor');
const visitor_logs = require('../../models/logs/visitor');

const fileUpload = require('../../blob/azureBlob');


const visitorExit = async (req, res) => {
    
    try {

        const uuid = req.body.uuid;
        const photo = req.files.photo;

        // upload photo to blob
        const photoUrl = await fileUpload(photo.tempFilePath, "visitor");

        const current_time = new Date();
        const istDateTime = current_time.toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
        

        // save to logs
        const data = await visitor_transactional.findOne({ uuid: uuid });

        if(!data){
            res.status(404).send({ message: 'INVALID UUID FOR VISITOR'});
            return;
        }

        const logs = new visitor_logs({
            uuid: uuid,
            name: data.name,
            mobile: data.mobile,
            purpose: data.purpose,
            entry_time: data.entry_time,
            photo_entry: data.photo_entry,
            photo_exit: photoUrl,
            exit_time: istDateTime
        });

        const save = await logs.save();

        // delete from transactional
        const deleteData = await visitor_transactional.deleteOne({ uuid: uuid });

        res.status(200).send();

    } catch (error) {
        console.log("This is error from ./controllers/security/visitorExit.js");
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}



module.exports = visitorExit;