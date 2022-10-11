//http server
const express = require('express');
const app =express();
const morgan = require('morgan');
//dotenv module allows you to seperate the secrets from sourcecode
const dotenv = require('dotenv');
dotenv.config({path:'config.env'});

//instead of hardcoded port number we will be passing the PORT variable 
//the value of the varibale is not shared here and is present in config.env 
const PORT = process.env.PORT||8080

//using morgan module we can log the requests
app.use(morgan('tiny'));

app.get('/',(req,res)=>{
    res.send("Crud Application");
});

app.listen(PORT,()=>{console.log('Server is running on http://localhost:'+PORT)});