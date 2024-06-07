const uuid = require('uuid');

const reset = require('../../models/resetPassword/reset');
const mailer = require('../../SMTP/resetPassword/resetPassword');


const student = require('../../models/static/students_alumni/student');
const staff = require('../../models/static/staff/staff');
const security = require('../../models/static/security/security');
const hostelWarden = require('../../models/static/hostelWarden/hostelWarden');


const initResetPassword = async (req, res) => {


    try {  
        const _uuid = req.body.uuid;
        var email = '';
        if(_uuid.endsWith('student')){
            email = (await student.findOne({uuid:_uuid})).email;
        }
        else if(_uuid.endsWith('staff')){
            email = (await staff.findOne({uuid:_uuid})).email;
        }
        else if(_uuid.endsWith('security')){
            email = (await security.findOne({uuid:_uuid})).email;
        }
        else if(_uuid.endsWith('hostelWarden')){
            email = (await hostelWarden.findOne({uuid:_uuid})).email;
        }
        else{
            return res.status(401).json({message: 'Invalid Link'});
        }

        const uuid1 = uuid.v4();
        const uuid2 = uuid.v4();
        const uuid3 = uuid.v4();

        // Generate a timestamp
        const timestamp = Date.now().toString();

        // Create a random string (example of 16 characters)
        const randomString = Math.random().toString(36).substring(2, 18);

        // Concatenate to create a very long unique string
        const resetToken = `${uuid1}${uuid2}${uuid3}${timestamp}${randomString}`;

        // Create a new reset object
        const newReset = new reset({
            resetToken : resetToken,
            uuid: _uuid
        });

        // Save the reset object
        await newReset.save();

        // Send an email
        await mailer(email,resetToken);

        res.status(200).json({message: 'Email sent successfully'});


    } catch (error) {
        console.log("This is error from ./controllers/resetPassword/initResetPassword.js");
        console.log(error);
        res.status(500).json({message: 'Internal server error'});
    }

}


module.exports = initResetPassword;




