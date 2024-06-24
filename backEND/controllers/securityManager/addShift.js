const security = require('../../models/static/security/security');
const shiftLogs = require('../../models/securityShiftsLogs/shift');


const addShift = async (req, res) => {

    try {

        const jsFrontendDate = new Date(req.body.date);

        // Extract day, month, and year from the JavaScript Date object
        const day = jsFrontendDate.getDate();
        const month = jsFrontendDate.getMonth() + 1; // Months are zero-indexed, so add 1
        const year = jsFrontendDate.getFullYear();

        // Format database date as "25/06/2024"
        const databaseDate = `${day}/${month}/${year}`;

        const check = await shiftLogs.findOne({ date: databaseDate });

        if (check) {
            return res.status(403).send({ message: "Shifts already added for today" });
        }



        const clear = await security.updateMany({}, { shift: -1 });


        const { shift1, shift2, shift3 } = req.body;

        for (shift in shift1) {
            const uuid = shift1[shift];
            const update = await security.findOneAndUpdate({ uuid: uuid }, { shift: 1 });
        }

        for (shift in shift2) {
            const uuid = shift2[shift];
            const update = await security.findOneAndUpdate({ uuid: uuid }, { shift: 2 });
        }

        for (shift in shift3) {
            const uuid = shift3[shift];
            const update = await security.findOneAndUpdate({ uuid: uuid }, { shift: 3 });
        }

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
        ]

        const data = await security.aggregate(pipe);

        const shiftLog = {
            shift1: [],
            shift2: [],
            shift3: [],
            date: databaseDate
        };

        for (guard in data) {
            if (data[guard].shift === 1) {
                shiftLog.shift1.push(data[guard]);
            }
            else if (data[guard].shift === 2) {
                shiftLog.shift2.push(data[guard]);
            }
            else if (data[guard].shift === 3) {
                shiftLog.shift3.push(data[guard]);
            }
        }

        // console.log(shiftLog);

        const log = new shiftLogs(shiftLog);
        const save = await log.save();

        res.status(200).json({ message: "Shifts added successfully" });


    } catch (error) {
        console.log("This is error from ./backEND/controllers/securityManager/addShift.js");
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }

}

module.exports = addShift;

