const express = require('express');

const router = express.Router();

const auth = require('../../middleware/dataAuth');


const getCurrentVisitors = require('../../controllers/dataTables/getCurrentVisitors');

const getStudentLogs = require('../../controllers/dataTables/getStudentLogs');

const getVisitorsLogs = require('../../controllers/dataTables/getVisitorsLogs');

const getStaffLogs = require('../../controllers/dataTables/getStaffLogs');


router.get('/getCurrentVisitors', getCurrentVisitors);

router.get('/getStudentLogs', getStudentLogs);

router.get('/getVisitorsLogs', getVisitorsLogs);

router.get('/getStaffLogs', getStaffLogs);


module.exports = router;