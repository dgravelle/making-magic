'use strict'

var path = require('path');
var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

let app = express();

const routes = require('./routes');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, '../client/build')));

app.use(routes(express.Router()));

app.use((req, res, next) => {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    console.log('error, sorry');
    res.status(err.status || 500);
    res.send(err.message)
});

app.listen('3001');
