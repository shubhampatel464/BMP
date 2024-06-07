const express = require('express');

const router = express.Router();



router.post('/initResetPassword',require('../../controllers/resetPassword/initResetPassword'));
router.post('/resetPassword',require('../../controllers/resetPassword/resetPassword'));


module.exports = router;