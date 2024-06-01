const cron = require('node-cron');


const monthlyupdate = require('./attendence/monthlyUpdate');


cron.schedule('07 17 * * *', monthlyupdate);