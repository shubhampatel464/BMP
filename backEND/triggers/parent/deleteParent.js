const parent_transactional = require('../../models/transactional/parent');

const deleteParent = async (req, res) => {
    
    try {
        const currentDate = new Date();
        const result = await parent_transactional.deleteMany({arrival_date: { $lt: currentDate }});
        return;

    } catch (error) {
        console.log("This is error from ./triggers/parent/deleteParent.js")
        console.error(error);
        return;
    }
}

module.exports = deleteParent;