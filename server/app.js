const express = require('express');
const app = express();

let visitorCnt = 0;

app.get('/',(req,res,next)=>{
    visitorCnt++;
    res.send();
    console.log(visitorCnt);
    next();
})