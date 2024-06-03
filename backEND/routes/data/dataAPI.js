const express = require('express');

const router = express.Router();



const getCurrentVisitors = require('../../controllers/dataTables/getCurrentVisitors');


router.get('/getCurrentVisitors', getCurrentVisitors);


module.exports = router;