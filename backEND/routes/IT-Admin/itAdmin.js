const express = require('express');

const router = express.Router();


const auth = require('../../middleware/itAdminAuth');




router.post('/login', require('../../controllers/IT-Admin/login'));

router.post('/addUser',auth, require('../../controllers/IT-Admin/addUser'));

router.post('/addBulkStudents',auth, require('../../controllers/IT-Admin/addBulkStudents'));

router.post('/addStudent',auth, require('../../controllers/IT-Admin/addStudent'));

router.post('/deleteWholeBatch',auth, require('../../controllers/IT-Admin/deleteWholeBatch'));

router.post('/deleteStudent',auth, require('../../controllers/IT-Admin/deleteStudent'));

router.post('/deleteUser',auth, require('../../controllers/IT-Admin/deleteUser'));







module.exports = router;