const { stringify } = require('uuid');
const student = require('../../models/static/students_alumni/student');

const deleteWholeBatch = async (req, res) => {
    try {
        const { batch } = req.body;

        const start = Number(batch + '000'); // e.g., 2021-xx-xxx
        const end = Number(batch + '999');   // e.g., 2021-xx-xxx
 
         // Delete the documents
        const result = await student.deleteMany({
             student_id: {
                 $gte: start,
                 $lt: end
             }
        });
 

        if(result.deletedCount > 0){
            res.status(200).send({ message: "Batch deleted successfully" });
        }  
        else{
            res.status(400).send({ message: "Batch not found" });
        }

        
    } catch (error) {
        console.log("This is error from ./controllers/IT-Admin/deleteWholeBatch.js");
        console.log(error);
        res.status(500).send({ message: "Internal Server Error" });
    }
}

module.exports = deleteWholeBatch;