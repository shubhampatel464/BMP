// Libraries
const express = require('express');
const fileUpload = require('express-fileupload');
const cors = require('cors');
require('dotenv').config();






// Middleware
const app = express();

app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}));

const corsOptions = {
    origin: '*', // Allow all origins
};
app.use(cors(corsOptions));



require('./connection/connect');
require('./connection/azureBlob');





// ENV Variables
const port = process.env.PORT || 7777;





// Routes
const test = require('./routes/test/test');
const student = require('./routes/student/student');

app.use('/test',test); 
app.use('/student',student);



app.listen(port, () => {    
    console.log(`Server is Listening on port ${port}`);
    }
);