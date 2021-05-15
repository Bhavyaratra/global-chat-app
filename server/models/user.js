const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    googleId:{
        type: String,
        require: true,
    },
    displaName:{
        type: String,
        require: true,
    },
    firstName:{
        type: String,
        require: true,
    },
    lastName:{
        type: String,
        require: true,
    },
    image:{
        type: String,
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
}) 

const User = mongoose.model('User',UserSchema);

module.exports=User;