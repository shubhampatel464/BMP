const ExcelJS = require('exceljs');


const staff_attendence = require('../../models/attendence/staff');
const staff = require('../../models/static/staff/staff');

const mailReport = require('../../SMTP/attendence/sendMail');


// const convertToIST = (date) => {
//     if (!(date instanceof Date)) return date;
//     return new Date(date.getTime() + 5.5 * 60 * 60 * 1000); // Add 5 hours and 30 minutes
// };

const convertUTCToISTTimeString = (utcDate) => {
    const istOptions = {
      timeZone: 'Asia/Kolkata', // Indian Standard Time (IST)
      hour12: false, // Use 24-hour format
      hour: '2-digit',
      minute: '2-digit',
    };
  
    return utcDate.toLocaleTimeString('en-IN', istOptions);
};

const isTimeBefore9AM = (istTimeString) => {
    const [hours, minutes] = istTimeString.split(':');
    const istHours = parseInt(hours, 10);
    const istMinutes = parseInt(minutes, 10);
  
    if (istHours < 9 || (istHours === 9 && istMinutes === 0)) {
      return true; // Time is before 9:00 AM
    } else {
      return false; // Time is at or after 9:00 AM
    }
};

const updateAttendence = async () => {
    try {

        // SEND EMAIL OF ATTENDENCE TO ADMIN

        const data = await staff_attendence.find({}).exec();

        const workbook = new ExcelJS.Workbook();
        const worksheet = workbook.addWorksheet('Attendance Data');

        worksheet.addRow(['Employee Name', 'Mobile No.', 'Department', 'Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7', 'Day 8', 'Day 9', 'Day 10', 'Day 11', 'Day 12', 'Day 13', 'Day 14', 'Day 15', 'Day 16', 'Day 17', 'Day 18', 'Day 19', 'Day 20', 'Day 21', 'Day 22', 'Day 23', 'Day 24', 'Day 25', 'Day 26', 'Day 27', 'Day 28', 'Day 29', 'Day 30', 'Day 31']);



        // for(const element of data){
        //     const staffData = await staff.findOne({ uuid: element.uuid }).exec();
        //     const { name, mobile, department } = staffData;
        //     const { attendence } = element;
        //     const {day1,day2,day3,day4,day5,day6,day7,day8,day9,day10,day11,day12,day13,day14,day15,day16,day17,day18,day19,day20,day21,day22,day23,day24,day25,day26,day27,day28,day29,day30,day31} = attendence;
        //     worksheet.addRow([name,mobile,department,day1,day2,day3,day4,day5,day6,day7,day8,day9,day10,day11,day12,day13,day14,day15,day16,day17,day18,day19,day20,day21,day22,day23,day24,day25,day26,day27,day28,day29,day30,day31]);
        // }


        for (const element of data) {
            const staffData = await staff.findOne({ uuid: element.uuid }).exec();
            const { name, mobile, department } = staffData;

            const { attendence } = element;
            const {
                day1, day2, day3, day4, day5, day6, day7, day8, day9, day10,
                day11, day12, day13, day14, day15, day16, day17, day18, day19,
                day20, day21, day22, day23, day24, day25, day26, day27, day28,
                day29, day30, day31
            } = attendence;

            const rowValues = [name, mobile, department, day1, day2, day3, day4, day5, day6, day7, day8, day9, day10,
                day11, day12, day13, day14, day15, day16, day17, day18, day19, day20, day21, day22,
                day23, day24, day25, day26, day27, day28, day29, day30, day31];

            const row = worksheet.addRow(rowValues);

            row.eachCell((cell, colNumber) => {
                if (colNumber > 3) { // Skipping name, mobile, and department columns
                  if (cell.value instanceof Date && cell.value.getTime() === new Date(0).getTime()) {
                    console.log(cell.value.getTime());
                    cell.value = 'Absent';
                    cell.font = { bold: true, color: { argb: 'FF0000' } }; // Red and bold
                  } 
                  else if (cell.value instanceof Date) {
                    const istDate = convertUTCToISTTimeString(cell.value);
                    // console.log(istDate);
                    cell.value = istDate 
                    if (!isTimeBefore9AM(istDate)) {
                      cell.font = { bold: true, color: { argb: '0000FF' } }; // Blue and bold
                    }
                  }
                }
            });
        }


        const buffer = await workbook.xlsx.writeBuffer();

        const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];



        await mailReport(buffer, month[data[0].month-1] + " " + data[0].year);

        // console.log("UPDATED");



        // const data = await staff_attendence.find({}).exec();

        data.forEach(async (element) => {
            const attendence = new staff_attendence({
                uuid: element.uuid,                
            });

            await staff_attendence.deleteOne({ uuid: element.uuid });

            await attendence.save();
        });


    }
    catch (error) {
        console.log("This is error from ./triggers/attendence/monthlyUpdate.js");
        console.log(error);
        return;
    }
}

module.exports = updateAttendence;





