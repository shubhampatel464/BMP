const express = require('express');

const router = express.Router();






router.post('/login', require('../../controllers/hostelWarden/login'));
router.post('/addVehicle', require('../../controllers/hostelWarden/addVehicle'));


module.exports = router;