 const express = require('express');
 const bodyParser = require('body-parser');
 const mongoose = require('./dbconnection');
 
 // express app
 const app =  express();

 app.use(bodyParser.json());
 // initilize routes 
 app.use('/api',require('./routes/api'));

 // listing for request  
 app.listen(process.env.port|| 4000,function(){
    console.log('port is ready for handling request');
 })
