const mailTransporter = require("../utils/setup");


const resetPassword = async (email,resetToken) => {

    let mailDetails = {
        from: 'Admin Attendance System,DA-IICT',
        to: email,
        subject: "Password Reset",
        text: `Please click on the following link to reset your password:127.0.0.1:${process.env.PORT}/reset/reset-password?resetToken=${resetToken}`,
    };

    const s = await mailTransporter.sendMail(mailDetails, function (err, data) {
        if (err) {
            console.log('This is error from ./SMTP/attendence/sendMail.js');
            console.log(err);
            return 0;
        } else {
            // console.log('Email sent successfully');
            return 1;
        }
    });
}

module.exports = resetPassword;