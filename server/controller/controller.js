const messages = require('../models/message');
// const users = require('../models/user');
const start=(req,res)=>{
    res.send("server api");
}

const getAllMsgs=(req,res)=>{
    messages.find()
    .then((result)=>{
        res.status(200).json(result);
    })
    .catch((err)=>{
        res.status(400).send(err);
    })
}



module.exports={start,getAllMsgs,
              
                };