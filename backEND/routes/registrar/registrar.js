const express = require('express');

const router = express.Router();



router.post('/login', require('../../controllers/registrar/login'));

router.get('/getCurrentVisitors',require('../../controllers/dataTables/getCurrentVisitors'));

router.get('/getStudentLogs', require('../../controllers/dataTables/getStudentLogs'));

router.get('/getVisitorsLogs', require('../../controllers/dataTables/getVisitorsLogs'));

router.get('/getStaffLogs', require('../../controllers/dataTables/getStaffLogs'));

router.get('/getParentLogs', require('../../controllers/dataTables/getParentLogs'));


module.exports = router;