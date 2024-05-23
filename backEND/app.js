// Libraries
const express = require('express');
const fileUpload = require('express-fileupload');
require('dotenv').config();




// Middleware
const app = express();

app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}));

require('./connection/connect');
require('./connection/azureBlob');





// ENV Variables
const port = process.env.PORT || 7777;





// Routes
const test = require('./routes/test/blob_test');

app.use('/test',test); 



app.listen(port, () => {    
    console.log(`Server is Listening on port ${port}`);
    }
);