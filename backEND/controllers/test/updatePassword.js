const staff = require('../../models/static/staff/staff');
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


async function AddNew(data) {
    const hashedPasswords = await Promise.all(data.map(async (student_1) => {
        const newData = new staff(student_1);
        const save = await newData.save();
    }));
}






const updatePassword = async (req,res) => {
    try{
        
        const data = await staff.find({}).exec();

        hashPasswords(data).then(() => {
            // console.log('All passwords hashed', data);
        });

        // await student.updateMany({},{password: data.password});

        const deleteOne = await staff.deleteMany({}).exec();
        
        console.log(deleteOne);


        AddNew(data).then(() => {
            console.log('All passwords Saved', data);
        });

        res.status(200).send("Password Updated Successfully");
    
    }
    catch(err){
        res.status(400).send("Error in updating password");
    }
}

module.exports = updatePassword;


