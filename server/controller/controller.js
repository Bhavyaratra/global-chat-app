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

const postMsg=async (req,res)=>{
    const newMsg = new messages(req.body);
    try{
        await newMsg.save();
        console.log("new msg")
    }catch(err){
        console.log(err);
    }
}

module.exports={start,getAllMsgs,
                postMsg,
                };