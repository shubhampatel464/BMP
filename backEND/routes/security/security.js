const express = require('express');



const router = express.Router();


const login = require('../../controllers/security/login');

const getData = require('../../controllers/security/getData');

const studentEntryExit = require('../../controllers/security/studentEntryExit');

const staffEntryExit = require('../../controllers/security/staffEntryExit');

const visitorEntry = require('../../controllers/security/visitorEntry');

const visitorExit = require('../../controllers/security/visitorExit');






router.post('/login', login);

router.get('/getData', getData);

router.post('/studentEntryExit', studentEntryExit);

router.post('/staffEntryExit', staffEntryExit);

router.post('/visitorEntry', visitorEntry);

router.get('/visitorExit', visitorExit);








module.exports = router;