const student = require("../../models/static/students_alumni/student");
const uuid = require("uuid");


const addStudent = async (req, res) => {
    try {

        const { name, email, mobile, student_id, room } = req.body;
    
        const pass = `${student_id}${room}`;
    
        const newStudent = new student({
            name,
            email,
            password: pass,
            mobile,
            student_id,
            room,
            uuid: `${uuid.v4()}student`,
        });
    
        await newStudent.save();
        res.status(200).send({ message: "Student added successfully" });

    } catch (error) {
        console.log("This is error from ./controllers/IT-Admin/addStudent.js");
        console.log(error);
        res.status(500).send({ message: "Internal Server Error" });
    }
}

module.exports = addStudent;
