const express = require('express');
const Controller = require('../controller/controller');
const router =express.Router();

router.get('/',Controller.start); 

router.get('/allmsgs',Controller.getAllMsgs);



module.exports= router;
