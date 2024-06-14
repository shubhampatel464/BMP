const uuid = require('uuid');
const excel = require('xlsx');
const bcrypt = require('bcryptjs');


const student = require('../../models/static/students_alumni/student');


const addBulkStudents = async (req, res) => {

    try {

        const file = req.files.student;

        const workbool = excel.readFile(file.tempFilePath, {type: 'buffer'});
        const sheet_name_list = workbool.SheetNames;
        const xlData = excel.utils.sheet_to_json(workbool.Sheets[sheet_name_list[0]]);

        const students = [];

        const requiredFields = ['name', 'email', 'mobile', 'student_id', 'room'];

        if (xlData.length > 0) {

            const availableFields = Object.keys(xlData[0]);
            const missingFields = requiredFields.filter(field => !availableFields.includes(field));
        
            if (missingFields.length > 0) {
                console.error('Missing required fields:', missingFields);
                return res.status(400).json({ error: 'Missing required fields', missingFields });
            }
            else {
                for (const student of xlData) {
                    const pass = `${student.student_id}${student.room}`;
                    const hashedPass = await bcrypt.hash(pass, 8);
                    students.push({
                        name: student.name,
                        email: student.email,
                        password: hashedPass,
                        mobile: student.mobile,
                        student_id: student.student_id,
                        room: student.room,
                        uuid: `${uuid.v4()}student`
                    });
                }
        
                await student.insertMany(students);
                return res.status(200).send({message: "Students added successfully"});
            }
        } else {
            return res.status(400).json({ error: 'Excel file is empty or has no data' });
        }       


        
    } catch (error) {
        console.log("This is error from ./controllers/IT-Admin/addBulkStudents.js");
        console.log(error);
        res.status(500).send({message: "Internal Server Error"});
    }

}


module.exports = addBulkStudents;