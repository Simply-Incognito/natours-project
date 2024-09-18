const express = require('express'),
fs = require('fs'),
toursRouter = require('./routes/toursRoute'),
usersRouter = require('./routes/usersRoute');

// create express app
const app = express();

// Middlewares
app.use(express.json());

// Custom Middlewares
app.use('/api/v1/tours', toursRouter);
app.use('/api/v1/users', usersRouter);

// Export Express App
module.exports = app;
