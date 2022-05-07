const express = require('express');
const morgan = require('morgan');
const taskRoutes = require ('./routes/tasks.routes.js');


const app = express();
app.use(morgan('dev'));
app.use(taskRoutes)

app.listen(3000);
console.log('listen in port 3000');