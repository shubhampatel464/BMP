const express = require('express');

const router = express.Router();








router.post('/addUser', require('../../controllers/IT-Admin/addUser'));

router.post('/addBulkStudents', require('../../controllers/IT-Admin/addBulkStudents'));





module.exports = router;