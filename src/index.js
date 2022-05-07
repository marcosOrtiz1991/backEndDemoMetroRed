const express = require('express');
const morgan = require('morgan');
const taskRoutes = require ('./routes/tasks.routes.js');


const app = express();
app.use(morgan('dev'));
app.use(taskRoutes)
puerto = process.env.PORT || 3000;

app.listen(puerto);
console.log('listen in port 3000');