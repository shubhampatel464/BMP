const ExcelJS = require('exceljs');


const staff_attendence = require('../../models/attendence/staff');
const staff = require('../../models/static/staff/staff');

const mailReport = require('../../SMTP/attendence/sendMail');





const updateAttendence = async () => {
    try {

        // SEND EMAIL OF ATTENDENCE TO ADMIN

        const data = await staff_attendence.find({}).exec();

        const workbook = new ExcelJS.Workbook();
        const worksheet = workbook.addWorksheet('Attendance Data');

        worksheet.addRow(['Employee Name','Mobile No.','Department', 'Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7', 'Day 8', 'Day 9', 'Day 10', 'Day 11', 'Day 12', 'Day 13', 'Day 14', 'Day 15', 'Day 16', 'Day 17', 'Day 18', 'Day 19', 'Day 20', 'Day 21', 'Day 22', 'Day 23', 'Day 24', 'Day 25', 'Day 26', 'Day 27', 'Day 28', 'Day 29', 'Day 30', 'Day 31']);



        for(const element of data){
            const staffData = await staff.findOne({ uuid: element.uuid }).exec();
            const { name, mobile, department } = staffData;
            const { attendence } = element;
            const {day1,day2,day3,day4,day5,day6,day7,day8,day9,day10,day11,day12,day13,day14,day15,day16,day17,day18,day19,day20,day21,day22,day23,day24,day25,day26,day27,day28,day29,day30,day31} = attendence;
            worksheet.addRow([name,mobile,department,day1,day2,day3,day4,day5,day6,day7,day8,day9,day10,day11,day12,day13,day14,day15,day16,day17,day18,day19,day20,day21,day22,day23,day24,day25,day26,day27,day28,day29,day30,day31]);
        }

        const buffer = await workbook.xlsx.writeBuffer();

        const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

        

        await mailReport(buffer,month[data[0].month] + " " + data[0].year);

        



        // console.log("UPDATED");

        // const data = await staff_attendence.find({}).exec();

        data.forEach(async (element) => {
            const attendence = new staff_attendence({
                uuid: element.uuid,
                month: new Date().getMonth(),
                year: new Date().getFullYear(),
                attendence: {
                    day1: 0,
                    day2: 0,
                    day3: 0,
                    day4: 0,
                    day5: 0,
                    day6: 0,
                    day7: 0,
                    day8: 0,
                    day9: 0,
                    day10: 0,
                    day11: 0,
                    day12: 0,
                    day13: 0,
                    day14: 0,
                    day15: 0,
                    day16: 0,
                    day17: 0,
                    day18: 0,
                    day19: 0,
                    day20: 0,
                    day21: 0,
                    day22: 0,
                    day23: 0,
                    day24: 0,
                    day25: 0,
                    day26: 0,
                    day27: 0,
                    day28: 0,
                    day29: 0,
                    day30: 0,
                    day31: 0
                }
            });

            await staff_attendence.deleteOne({ uuid: element.uuid});

            await attendence.save();

        });
        

    }
    catch (error) {
        console.log("This is error from ./triggers/attendence/monthlyUpdate.js");
        console.log(error);
    }
}

module.exports = updateAttendence;





