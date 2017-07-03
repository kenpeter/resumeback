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

// model
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


// does default user already exist
// wrap promise in a func, then return it.
const doesDefaultUserExistPromise = function() {
  return new Promise(function (resolve, reject) {
    let obj = {username: 'kenpeter'};
    User.findOne(obj, function(err, res) {
      // err
      if (err) {
        let obj = { success: false };
        console.log(err);
        reject(obj);
      }
      else {
        let obj = { success: true };
        console.log(res);
        resolve(res);
      }
    });

  });
}


// wrap promise in a func, then return it.
const defaultUserSavePromise = function() {
  return new Promise(function (resolve, reject) {
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
      if (err) {
        let obj = { success: false };
        console.log(err);
        reject(obj);
      }
      else {
        let obj = { success: true };
        resolve(obj);
      }
    });

  });
}






// default -------------------------------------------
app.get('/', function(req, res) {
  // res send
  res.send('This is the boring default page.');
});


// set up user -------------------------------
app.get('/setup', async function(req, res) {
  try {
    let userExistRes = await doesDefaultUserExistPromise();
    if(userExistRes._id != undefined) {
      // user already there, do nothing.
      console.log('-- user already exist --');
    }
    else {
      console.log('-- user not exist, create --');
      let userSaveRes = await defaultUserSavePromise();
    }

    res.send({success: true});
  }
  catch(err) {
    console.log('-- error --');
    console.error(err);
  }


});




// listen
app.listen(port);
console.log('Magic happens at http://localhost:' + port);
