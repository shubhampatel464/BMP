const visitor_transactional = require('../../models/transactional/visitor');
const filesUpload = require('../../blob/azureBlob');


const uuid = require('uuid');


const visitorEntryExit = async (req, res) => {

    try {

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

        const _uuid = `${uuid.v4()}visitor`;

        const name = req.body.name;
        const mobile = req.body.mobile;
        const purpose = req.body.purpose;
        const photo = req.files.photo;
        const entry_time = istDateTime;

        // upload photo to blob
        const photoUrl = await filesUpload(photo.tempFilePath, "visitor");


        const new_visitor = new visitor_transactional({
            uuid: _uuid,
            name: name,
            mobile: mobile,
            purpose: purpose,
            photo_entry: photoUrl,
            entry_time: entry_time
        });

        const save = await new_visitor.save();

        res.status(200).send({ uuid: _uuid });


    } catch (error) {
        console.log("This is error from ./controllers/security/visitorEntryExit.js");
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

module.exports = visitorEntryExit;




