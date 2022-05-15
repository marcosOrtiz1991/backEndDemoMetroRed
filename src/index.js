const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const taskRoutes = require ('./routes/tasks.routes.js');
const doctorRoutes = require ('./routes/doctor.router.js');
const mysql = require ('mysql');
const myConnection = require ('express-myconnection');
const bodyParser = require('body-parser');


const app = express();
app.use(myConnection(mysql,{
    user:'admin',
    password:'barcelona1991',
    host:'localhost',
    port:3306,
    database:'mydb'
},'single'));

/*
app.use(myConnection(mysql,{
    user:'b3c05c0d7f2416',
    password:'162c0ff3',
    host:'us-cdbr-east-05.cleardb.net',
    port:3306,
    database:'heroku_578789b8b08ad99'
},'single'));*/

app.use(morgan('dev'));
app.use(cors());
//app.use(express.json());
app.use(bodyParser.json({ limit: "200mb" }));
app.use(bodyParser.urlencoded({ limit: "200mb",  extended: true, parameterLimit: 1000000 }));
app.use('/',taskRoutes)
app.use('/doctor/',doctorRoutes)
puerto = process.env.PORT || 4000;

app.listen(puerto);
console.log('listen in port 4000');



//middleware




