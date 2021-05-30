//importing modules

var express = require('express');
var mongoose = require('mongoose');
//var bodyparser = require('bodyparser');
var cors = require('cors');
var path = require('path');

var app = express();

const route = require('./routes/route');


//MongoDB Connection
mongoose.connect('mongodb://localhost:27017/applicatons', { useNewUrlParser: true, useUnifiedTopology: true});

//mongoose.connect('mongodb://localhost:27017/applications');

//On Successfull Connection

mongoose.connection.on('connected',()=>{
    console.log('Connected to MongoDB at Port 27017')
})

//On Connection Error to MongoDB

mongoose.connection.on('error',(err)=>{
    if(err)
    {
         console.log('Database Connection Error: ' + err);
    }
    
});



//Define Port Number
const port = 3000;

//Middleware
app.use(cors());

//body - parser
app.use(express.urlencoded({extended: true}));
app.use(express.json()) // To parse the incoming requests with JSON payloads
//app.use(bodyparser.json());


//static files

app.use(express.static(path.join(__dirname, 'public')));

//routes

app.use('/api', route);

//testing server

app.get('/',(req,res)=>{
    res.send('foobar');
})

app.listen(port,()=>{
    console.log('server running at port: ' + port);
});



