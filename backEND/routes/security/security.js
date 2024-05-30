const express = require('express');



const router = express.Router();


const login = require('../../controllers/security/login');

const getData = require('../../controllers/security/getData');

const studentEntryExit = require('../../controllers/security/studentEntryExit');


router.post('/login', login);

router.get('/getData', getData);

router.post('/studentEntryExit', studentEntryExit);








module.exports = router;