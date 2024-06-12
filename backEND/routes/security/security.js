const express = require('express');



const router = express.Router();


const auth = require('../../middleware/securityAuth');






router.post('/login', require('../../controllers/security/login'));

router.get('/getData', require('../../controllers/security/verifyUser'));

router.post('/studentEntryExit', require('../../controllers/security/studentEntryExit'));

router.post('/staffEntryExit', require('../../controllers/security/staffEntryExit'));

router.post('/visitorEntry', require('../../controllers/security/visitorEntry'));

router.post('/visitorExit', require('../../controllers/security/visitorExit'));

router.post('/parentEntryExit', require('../../controllers/security/parentEntryExit'));










module.exports = router;