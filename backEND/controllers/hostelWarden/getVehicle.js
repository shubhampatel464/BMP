const student = require("../../models/static/students_alumni/student");

const getStudentData = async (req, res) => {

    try {

        const studentData = await student.find({ vehicle: { $ne: "" } });

        res.status(200).send(studentData);
        
    } catch (error) {
        console.log("This is error from ./controllers/hostelWarden/getVehicle.js");
        console.log(error);
        res.status(500).send();
    }

}

module.exports = getStudentData;