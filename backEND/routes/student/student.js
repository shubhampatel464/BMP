const express = require('express');



const router = express.Router();

const login = require('../../controllers/students_alumni/login');


router.post('/login',login);






module.exports = router;