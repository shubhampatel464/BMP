const visitor = require('../../models/static/visitor/visitor');

const getVisitorList = async (req, res) => {
    try {
        const startOfToday = new Date();
        startOfToday.setHours(0, 0, 0, 0);

        const startOfTomorrow = new Date(startOfToday);
        startOfTomorrow.setDate(startOfTomorrow.getDate() + 1);

        const visitors = await visitor.find({
            arrival_date: {
                $gte: startOfToday,
                $lt: startOfTomorrow
            }
        });

        res.status(200).send(visitors);

    } catch (error) {
        console.log("This is an error from ./controllers/security/getVisitorList.js");
        console.log(error);
        res.status(500).send({ "message": "Internal server error" });
    }
}

module.exports = getVisitorList;