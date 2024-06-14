const security = require('../../models/static/security/security');
const hostelWarden = require('../../models/static/hostelWarden/hostelWarden');
const staff = require('../../models/static/staff/staff');
// const faculty = require('../../models/');
// const registrar = require('../../models/static/registrar/registrar');
// const security_manager = require('../../models/static/security_manager/security_manager');


const deleteUser = async (req, res) => {

    try {
    
        const role = req.body.role;

        if(role == "staff"){

            const staffData = await staff.findOne({ uuid: req.body.uuid });

            if (staffData) {
                
                if(staffData.department == "security"){
                    await security.deleteOne({ uuid: req.body.uuid });
                }

                await staff.deleteOne({ uuid: req.body.uuid });
                res.status(200).send({ message: "Staff deleted successfully" });
            } else {
                res.status(400).send({ message: "Staff not found" });
            }

        

        }
        else if(role == "hostelWarden"){

            const hostelWardenData = await hostelWarden.findOne({ uuid: req.body.uuid });

            if (hostelWardenData) {
                await hostelWarden.deleteOne({ uuid: req.body.uuid });
                res.status(200).send({ message: "Hostel Warden deleted successfully" });
            } else {
                res.status(400).send({ message: "Hostel Warden not found" });
            }
        }
        else{
            res.status(400).send({message: "Invalid role"});
        }
        
    } catch (error) {
        console.log("This is error from ./controllers/IT-Admin/deleteUser.js");
        console.log(error);
        res.status(500).send({ message: "Internal Server Error" });
    }

}

module.exports = deleteUser;