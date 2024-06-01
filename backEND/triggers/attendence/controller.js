const cron = require('node-cron');


const monthlyupdate = require('../attendence/monthlyUpdate');



cron.schedule('0 0 0 * * *', monthlyupdate);