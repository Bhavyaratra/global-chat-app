const express = require('express');
const http = require('http');
const routes = require('./router/router');
const passport = require('passport');
const session=require('express-session')
const MongoStore = require('connect-mongo')
const socketio= require('socket.io');
const messages = require('./models/message');

// Passport config
require('./db/passport')(passport)

const app = express();
const server = http.createServer(app);  
const io= socketio(server);
const port= 3001;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

let interval;
// run when client connects
io.on('connection',(socket)=>{
    console.log("new ws connection...");
    if (interval) {
        clearInterval(interval);
      }
      interval = setInterval(() => getApiAndEmit(socket), 1000);
      socket.on("disconnect", () => {
        console.log("Client disconnected");
        clearInterval(interval);
      });
});

const getApiAndEmit = socket => {
    const response = new Date();
    // Emitting a new message. Will be consumed by the client
    socket.emit("FromAPI", response);
  };
  

server.listen(port,function(err){
    if(err) console.log('not listening');
    else console.log('server listening on PORT ',port);
})


require('./db/conn');

//session
app.use(session({
    secret: 'globalchatapp',
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: process.env.dbURI})
}))

//*passport middleware
app.use(passport.initialize());
app.use(passport.session());

app.use('/api',routes);
app.use('/auth',require('./router/auth'));

app.get('/',(req,res)=>{
    res.send("server home page");
});

app.post('/api/newmsg',async (req,res)=>{
    const newMsg = new messages(req.body);
    try{
        await newMsg.save();
        io.emit("newmessage", newMsg);
        console.log("new msg")

    }catch(err){
        console.log(err);
    }
});

app.use((req,res)=>{
    res.send("404");
})

