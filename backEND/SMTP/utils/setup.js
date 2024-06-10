const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');


// Template website link
// https://moosend.com/templates/welcome/



const mailTransporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    service: 'gmail',
    port: '587',
    // secure:'true', 
    auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD
    }
});

mailTransporter.use('compile', hbs({
    viewEngine: {
        extname: '.hbs',
        // layoutsDir: './mailer/',
        defaultLayout: false,
        // partialsDir: './mailer/',
    }, viewPath: '../backEND/hbsTemplates/', extName: '.hbs'
}));



mailTransporter.verify((error, success) => {
    if (error) console.log(error);
    console.log("SMTP Server is ready");
});



module.exports = mailTransporter;