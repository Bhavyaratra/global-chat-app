const express = require('express');
const routes = require('./router/router');
const passport = require('passport');
const session=require('express-session')

// Passport config
require('./db/passport')(passport)

const app = express();
const port= process.env.PORT|| 3001;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.listen(port,function(err){
    if(err) console.log('not listening');
    else console.log('server listening on PORT ',port);
})


require('./db/conn');

//session
app.use(session({
    secret: 'globalchatapp',
    resave: false,
    saveUninitialized: false,
    //stor
}))

//passport middleware
app.use(passport.initialize());
app.use(passport.session());

app.use('/api',routes);
app.use('/auth',require('./router/auth'));

app.get('/',(req,res)=>{
    res.send("server home page");
});

app.use((req,res)=>{
    res.send("404");
})

