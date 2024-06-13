const uuid = require('uuid');
const excel = require('xlsx');


const student = require('../../models/static/students_alumni/student');


const addBulkStudents = async (req, res) => {

    try {

        const file = req.files.student;

        console.log(file);

        const buffer = Buffer.from(file.data);

        console.log(buffer);

        const dt = excel.readFile(file.tempFilePath, {type: 'buffer'});
        // console.log(dt);

        const workbook = excel.read(buffer, {type: 'buffer'});
        console.log(workbook);

        const sheet_name_list = workbook.SheetNames;
        console.log(sheet_name_list);

        const xlData = excel.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
        console.log(xlData);

        // const students = [];

        // xlData.forEach((student) => {
        //     students.push({
        //         name: student.name,
        //         email: student.email,
        //         password: student.mobile,
        //         mobile: student.mobile,
        //         student_id: student.student_id,
        //         room : student.room,
        //         uuid: uuid.v4()
        //     });
        // });

        // await student.insertMany(students);

        res.status(200).send({message: "Students added successfully"});

        
    } catch (error) {
        console.log("This is error from ./controllers/IT-Admin/addBulkStudents.js");
        console.log(error);
        res.status(500).json({message: "Internal Server Error"});
    }

}


module.exports = addBulkStudents;