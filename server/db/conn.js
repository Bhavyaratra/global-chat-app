const mongoose = require('mongoose');
const dotenv=require('dotenv');
dotenv.config();

const db= process.env.dbURI;
console.log(db);
mongoose.connect(db,{
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false
}).then((result)=>{
    console.log('connected to db');
}).catch((err)=>{
    console.log(err)
}) ;