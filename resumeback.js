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

// user model
const User = require('./app/models/user');
const Company = require('./app/models/company');
const Job = require('./app/models/job');

// port 8080
const port = process.env.PORT || 8080; // used to create, sign, and verify tokens


// config.secret assigns to superSecret
app.set('superSecret', config.secret);

//
app.use(bodyParser.urlencoded({ extended: false }));
//
app.use(bodyParser.json());

// express app can use morgon (dev)
// use morgan to log requests to the console
app.use(morgan('dev'));

// default -------------------------------------------
app.get('/', function(req, res) {
  // res send
  res.send('This is the boring default page.');
});


// set up user -------------------------------
app.get('/setup', function(req, res) {

  // create a user
  const theUser = new User({
    displayName: 'Gary Liang',
    username: 'kenpeter',
    password: 'password',
    admin: true
  });

  // save it
  // save the sample user
  theUser.save(function(err) {
    // err
    if (err) throw err;
    // log
    console.log('User saved successfully');
    // res json
    res.json({ success: true });
  });
});




// listen
app.listen(port);
console.log('Magic happens at http://localhost:' + port);
