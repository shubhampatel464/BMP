const student = require('../../models/static/students_alumni/student');

const deleteWholeBatch = async (req, res) => {
    try {
        const { batch } = req.body;

        const regex = new RegExp(`^${batch}`);

        // Delete the documents
        const result = await Student.deleteMany({ student_id: { $regex: regex } });

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