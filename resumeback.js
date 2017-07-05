// express
const express  = require('express');
// express instance
const app = express();
// parse incoming post request, to use as key-value or json
const bodyParser  = require('body-parser');
// log on console
const morgan = require('morgan');
// db
const mongoose = require('mongoose');
// web token
const jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
// the db and secret
const config = require('./config'); // get our config file

// lib
const mylib = require('./lib/lib');

// model
const User = require('./app/models/user');
const Company = require('./app/models/company');
const Job = require('./app/models/job');

// port
const port = process.env.PORT || 8014; // used to create, sign, and verify tokens


// config.secret assigns to superSecret
app.set('superSecret', config.secret);
//
app.use(bodyParser.urlencoded({ extended: false }));
//
app.use(bodyParser.json());

// express app can use morgon (dev)
// use morgan to log requests to the console
app.use(morgan('dev'));

// note if one of the routes not configure, will throw
// TypeError('Router.use() requires middleware function but got a
app.use('/api', require('./routes/api'));
app.use('/setup', require('./routes/setup'));
app.use('/', require('./routes/welcome'));


// listen
app.listen(port);
console.log(`listent to port: ${port}`);
