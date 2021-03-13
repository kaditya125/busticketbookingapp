const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const ticketRouter = require('./routes/ticketRoutes');

const app = express();

//GLOBAL MIDDLEWARES

//serving static files
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/api', ticketRouter);

module.exports = app;