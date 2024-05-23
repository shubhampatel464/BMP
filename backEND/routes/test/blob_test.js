const express = require('express');
const multer = require('multer');


const router = express.Router();

const blobUpload = require('../../blob/azureBlob');

router.post('/upload', async (req,res) => {

    const file = req.files;

    const url = await blobUpload(file.PNG_PHOTO.tempFilePath,"student");

    res.status(200).send(url);
});

module.exports = router;