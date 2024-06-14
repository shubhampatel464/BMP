const express = require('express');

const router = express.Router();







router.post('/login', require('../../controllers/IT-Admin/login'));

router.post('/addUser', require('../../controllers/IT-Admin/addUser'));

router.post('/addBulkStudents', require('../../controllers/IT-Admin/addBulkStudents'));

router.post('/addStudent', require('../../controllers/IT-Admin/addStudent'));

router.post('/deleteWholeBatch', require('../../controllers/IT-Admin/deleteWholeBatch'));

router.post('/deleteStudent', require('../../controllers/IT-Admin/deleteStudent'));

router.post('/deleteUser', require('../../controllers/IT-Admin/deleteUser'));







module.exports = router;