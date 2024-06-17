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

router.get('/getParentList', require('../../controllers/security/getParentList'));

router.get('/getCurrentVisitors',require('../../controllers/dataTables/getCurrentVisitors'));

router.get('/getStudentLogs', require('../../controllers/dataTables/getStudentLogs'));

router.get('/getVisitorsLogs', require('../../controllers/dataTables/getVisitorsLogs'));

router.get('/getStaffLogs', require('../../controllers/dataTables/getStaffLogs'));

router.get('/getParentLogs', require('../../controllers/dataTables/getParentLogs'));










module.exports = router;