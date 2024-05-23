const mongoose = require('mongoose');


const uri = process.env.MONGO_URI;



mongoose.connect(uri,{
    // useNewUrlParser:true,
    // useUnifiedTopology:true,
    // useFindAndModify:false
    // useCreateIndex:true
}).then(()=>{
    // console.log(res);
    console.log("Connected To MONGO-DB - mongoose");
}).catch((err)=>{
    console.log("ERROR FROM connect.js");
    console.log(err);
})

// module.exports = connect;