const student = require('../../models/static/students_alumni/student');
const student_transactional = require('../../models/transactional/student');
const staff = require('../../models/static/staff/staff');


const getData = async (req, res) => {
    try {

        const uuid = req.query.uuid;

        const index_student = uuid.indexOf("student");
        const index_staff = uuid.indexOf("staff");

        if(index_student != -1){
            const data2 = await student_transactional.findOne({uuid: uuid});
            const data = await student.findOne({uuid: uuid});
            if(data){
                const resData = {
                    entry : false
                }
                if(data2){
                    resData.entry = true;
                }
                res.status(200).send(resData);
            }
            else{
                res.status(404).send();
            }
        }
        else{
            const data = await staff.findOne({uuid: uuid});
            if(data){
                res.status(200).send();
            }
            else{
                res.status(404).send();
            }
        }
    } catch (error) {

        console.log("This is error from ./controller/security/getData.js");
        console.log(error);
        res.status(500).send();

    }
}


module.exports = getData;