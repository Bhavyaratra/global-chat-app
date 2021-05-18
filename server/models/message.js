const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    txt:{
        type:String,
        required:true
    },
    userID:{
        type:String,
        required:true
    },
    username:{
        type: String,
        required: true
    },
    photo:{
        type:String,
    },
},{timestamps: true});

const messages = mongoose.model('message',messageSchema);

module.exports= messages;
