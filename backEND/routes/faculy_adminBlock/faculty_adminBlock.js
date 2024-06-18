const express = require('express');

const router = express.Router();



router.post('/login', require('../../controllers/faculty_adminBlock/login'));

router.post('/addVisitor', require('../../controllers/faculty_adminBlock/addVisitor'));


module.exports = router;