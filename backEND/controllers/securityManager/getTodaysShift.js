const { $where } = require('../../models/securityShiftsLogs/shift');
const security = require('../../models/static/security/security');

const getTodaysShift = async (req, res) => {

    try {

        const pipe = [
            {
                $match: {
                    shift: { $ne: -1 }
                }
            },
            {
                $project: {
                    uuid: 1,
                    mobile: 1,
                    name: 1,
                    shift: 1
                }
            }
        ];
        
    const securities = await security.aggregate(pipe);

    res.status(200).send(securities);

}catch (error) {
    console.log("This is error from ./backEND/controllers/securityManager/getTodaysShift.js");
    console.log(error);
    res.status(500).send({ message: "Internal Server Error" });
}

}


module.exports = getTodaysShift;