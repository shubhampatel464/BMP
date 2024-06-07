const express = require('express');



const router = express.Router();



router.post('/login',require('../../controllers/students_alumni/login'));
router.get('/getData',require('../../controllers/students_alumni/getData'));






module.exports = router;