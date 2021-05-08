const express = require('express');
const routes = require('./router/router');
const app = express();
const port= process.env.PORT|| 3001;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.listen(port,function(err){
    if(err) console.log('not listening');
    else console.log('server listening on PORT ',port);
})

require('./db/conn');

app.use('/api',routes);

app.get('/',(req,res)=>{
    res.send("server home page");
});

app.use((req,res)=>{
    res.send("404");
})

