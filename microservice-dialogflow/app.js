var createError = require('http-errors');
var express = require('express');
var cookieParser = require('cookie-parser');

var dialogflowRouter = require('./routes/dialogflow');

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/dialogflow', dialogflowRouter);

module.exports = app;
