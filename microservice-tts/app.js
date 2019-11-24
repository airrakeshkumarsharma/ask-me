var createError = require('http-errors');
var express = require('express');
var cookieParser = require('cookie-parser');

var ttsRouter = require('./routes/tts');

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/pucho', ttsRouter);

module.exports = app;
