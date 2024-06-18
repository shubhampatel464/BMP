const visitor = require('../../models/visitor/visitor');
const uuid = require('uuid');


const addVisitor = async (req, res) => {
    
    try {
        
        const scheduled_by = req.user.uuid;
        const {name, email, phone, purpose, arrival_date} = req.body;

        const newVisitor = new visitor({
            name,
            email,
            phone,
            arrival_date,
            purpose,
            uuid: `${uuid.v4()}visitor`,
            scheduled_by
        });

        await newVisitor.save();

        res.status(200).send({message: "Visitor added successfully"});

    } catch (error) {
        console.log("This is an error from ./controllers/visitor/addVisitor.js");
        console.log(error);
        res.status(500).send({message: "Internal server error"});
    }

}


    module.exports = addVisitor;

