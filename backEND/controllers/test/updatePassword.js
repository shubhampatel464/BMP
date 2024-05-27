const student = require('../../models/static/students_alumni/student');
const bcrypt = require('bcryptjs');


async function hashPasswords(data) {
    const hashedPasswords = await Promise.all(data.map(async (student_1) => {
        const password = student_1.password;
        // console.log(password);
        const hashedPassword = await bcrypt.hash(password, 10);
        // console.log(hashedPassword);
        student_1.password = hashedPassword;
    }));
}


async function hashPasswords(data) {
    const hashedPasswords = await Promise.all(data.map(async (student_1) => {
        const password = student_1.password;
        // console.log(password);
        const hashedPassword = await bcrypt.hash(password, 10);
        // console.log(hashedPassword);
        student_1.password = hashedPassword;
    }));
}






const updatePassword = async (req,res) => {
    try{
        
        const data = await student.find({}).exec();

        hashPasswords(data).then(() => {
            // console.log('All passwords hashed', data);
        });

        // await student.updateMany({},{password: data.password});

        const deleteOne = await student.deleteMany({}).exec();
        
        console.log(deleteOne);

        const newData = new student(data);

        const insertMany = await newData.save();
        
        console.log(insertMany);

        res.status(200).send("Password Updated Successfully");
    
    }
    catch(err){
        res.status(400).send("Error in updating password");
    }
}

module.exports = updatePassword;


