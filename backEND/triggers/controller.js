const cron = require('node-cron');


// THIS CRON TIME IS IN GMT
cron.schedule('55 16 * * *', require('./attendence/monthlyUpdate'));

cron.schedule('5 0 * * *', require('./lateReport/lateReport'));

cron.schedule('5 0 * * *', require('./parent/deleteParent'));