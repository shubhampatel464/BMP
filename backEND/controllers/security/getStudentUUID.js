const student = require('../../models/student');


const getStudentUUID = async (req, res) => {
    try {
        const studentUUID = await student.findOne({student_id:req.query.student_id}).select('uuid');
        if (studentUUID) {
            res.status(200).send(studentUUID);
        } else {
            res.status(400).send('Student not found');
        }   
    }
    catch (error) {
        res.status(500).send('Internal Server Error');
    }
}

module.exports = getStudentUUID;