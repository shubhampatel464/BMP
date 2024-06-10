const parent_transactional = require('../../models/transactional/parent');

const uuid = require('uuid');


const addParentVisit = async (req, res) => {
    try {
        
        const { name1,name2,student_id,mobile,arrival_date,purpose } = req.body;
        const _uuid = `${uuid.v4()}parent`;
        
        const visit = new parent_transactional({
            name1,
            name2,
            student_id,
            mobile,
            arrival_date,
            purpose,
            uuid : _uuid
        });

        const parentVisit = await visit.save();

        res.status(201).send();

    } catch (error) {
        console.log("This is error from ./controllers/hostelWarden/addParentVisit.js");
        console.log(error);
        res.status(500).send(error);
    }
}

module.exports = addParentVisit;