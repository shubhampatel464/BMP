const visitor = require('../../models/static/visitor/visitor');


const deleteNotArrieved = async () => {

    try {

        const current_time = new Date();
        const visitors = await visitor.deleteMany({ arrival_date: { $lt: current_time } });
        return;

    } catch (error) {
        console.log("This is error from ./triggers/visitor/visitor.js");
        console.log(error);
        return;
    }

}

module.exports = deleteNotArrieved;