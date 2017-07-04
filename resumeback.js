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
app.get('/setup', async function(req, res) {
  try {
    let userExistRes = await mylib.doesDefaultUserExistPromise();
    if(userExistRes != undefined) {
      // user already there, do nothing.
      console.log('-- default user already exist --');
      res.send({isUserExist: true});
    }
    else {
      console.log('-- default user not exist, create --');
      // create default user
      let userSaveRes = await mylib.defaultUserSavePromise();
      // create company
      await mylib.defaultCompany1SavePromise();
      await mylib.defaultCompany2SavePromise();
      await mylib.defaultCompany3SavePromise();
      await mylib.defaultCompany4SavePromise();
      await mylib.defaultCompany5SavePromise();
      await mylib.defaultCompany6SavePromise();
      await mylib.defaultCompany7SavePromise();
      await mylib.defaultCompany8SavePromise();
      await mylib.defaultCompany9SavePromise();
      await mylib.defaultCompany10SavePromise();


      res.send({createdSuccess: true});
    }
  }
  catch(err) {
    console.log('-- error --');
    console.error(err);
  }


});




// listen
app.listen(port);
console.log('Magic happens at http://localhost:' + port);
