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


// Connection
require('./connection/connect');
require('./connection/azureBlob');


// Triggers
require('./triggers/controller');


// ENV Variables
const port = process.env.PORT || 7777;



// Routes


app.use('/test',require('./routes/test/test')); 
app.use('/student',require('./routes/student/student'));
app.use('/security',require('./routes/security/security'));








app.listen(port, () => {    
    console.log(`Server is Listening on port ${port}`);
    }
);