const express = require('express');
const app = express();
const port = 3000;
const mysql = require('mysql');
const cookieParser = require('cookie-parser');
require('dotenv').config();

app.use(cookieParser);

//CORS헤더 설정
app.use('/',(req, res, next)=> {
    res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5173');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

connection.connect((error)=>{
    if(error) {
        console.log(error);
        return;
    }
    console.log('Database Connected!');
});

app.post('/api/getVisitorNum',(req,res)=>{
    let clientIp = req.socket.remoteAddress;
    console.log(clientIp);
    let visitorNum;
    //connection.query("INSERT INTO visitor_cnt (date, ip) VALUES (?,?);",[NOW(),clientIp]);
    connection.query("SELECT * FROM visitor_cnt ORDER BY id DESC LIMIT 1;",(error,rows)=>{
        if(error) throw error;
        visitorNum = rows[0].id;
        console.log(visitorNum);
        res.status(200).send(visitorNum.toString());
    });
});

app.listen(port, () => {
    console.log("server is running on the 3000 port...");
});