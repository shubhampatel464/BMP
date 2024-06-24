const express = require('express');


const router = express.Router();

const blobUpload = require('../../blob/azureBlob');

router.post('/upload', async (req,res) => {

    const file = req.files;

    const url = await blobUpload(file.PNG_PHOTO.tempFilePath,"student");

    res.status(200).send(url);
});


const updatePassword = require('../../controllers/test/updatePassword.test');

router.get('/updatePassword',updatePassword);




const updateAttendence = require('../../triggers/attendence/monthlyUpdate');

router.get('/updateAttendence',updateAttendence);

// const temp = data.forEach(async (element) => {
//     const attendence = new staff_attendence({
//         uuid: element.uuid,
//         month: new Date().getMonth(),
//         year: new Date().getFullYear(),
//         attendence: {
//             1: 0,
//             2: 0,
//             3: 0,
//             4: 0,
//             .....
//             31: 0
//         }
//     });

//     await attendence.save();

// });






module.exports = router;