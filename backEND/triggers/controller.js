const cron = require('node-cron');


const monthlyupdate = require('./attendence/monthlyUpdate');

// THIS CRON TIME IS IN GMT
cron.schedule('55 16 * * *', monthlyupdate);