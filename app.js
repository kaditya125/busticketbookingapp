const express = require('express');
const path = require('path');
const ticketRoute = require('./routes/ticketRoute');
const userRouter = require('./routes/userRoute');
const bodyParser = require('body-parser');

const app = express();


//1) GLOBAL MIDDLEWARES
//Serving static file
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true })); 

app.use('/api/v1/tickets', ticketRoute);
app.use('/api/v1/users', userRouter);


module.exports = app;