const express = require('express');

const router = express.Router();



router.post('/login', require('../../controllers/faculty_adminBlock/login'));

router.post('/addVisitor', require('../../controllers/faculty_adminBlock/addVisitor'));

router.get('/getVisitors', require('../../controllers/faculty_adminBlock/getVisitors'));


module.exports = router;