const express = require('express');

const router = express.Router();



router.post('/login', require('../../controllers/registrar/login'));


module.exports = router;