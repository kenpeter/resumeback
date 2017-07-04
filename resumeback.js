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




// default
app.get('/', function(req, res) {
  // res send
  res.send('This is the boring default page.');
});


// set up user
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

      // create company
      let newComp1 = await mylib.defaultCompany1SavePromise();
      let newComp2 = await mylib.defaultCompany2SavePromise();
      let newComp3 = await mylib.defaultCompany3SavePromise();
      let newComp4 = await mylib.defaultCompany4SavePromise();
      let newComp5 = await mylib.defaultCompany5SavePromise();
      let newComp6 = await mylib.defaultCompany6SavePromise();
      let newComp7 = await mylib.defaultCompany7SavePromise();
      let newComp8 = await mylib.defaultCompany8SavePromise();
      let newComp9 = await mylib.defaultCompany9SavePromise();

      // create job
      let newJob1 = await mylib.defaultJob1SavePromise(newComp1._id);
      let newJob2 = await mylib.defaultJob2SavePromise(newComp2._id);
      let newJob3 = await mylib.defaultJob3SavePromise(newComp3._id);
      let newJob4 = await mylib.defaultJob4SavePromise(newComp4._id);
      let newJob5 = await mylib.defaultJob5SavePromise(newComp5._id);
      let newJob6 = await mylib.defaultJob6SavePromise(newComp6._id);
      let newJob7 = await mylib.defaultJob7SavePromise(newComp7._id);
      let newJob8 = await mylib.defaultJob8SavePromise(newComp8._id);
      let newJob9 = await mylib.defaultJob9SavePromise(newComp9._id);

      // create default user
      let jobArr = [
        newJob1._id,
        newJob2._id,
        newJob3._id,
        newJob4._id,
        newJob5._id,
        newJob6._id,
        newJob7._id,
        newJob8._id,
        newJob9._id
      ];
      let newUser = await mylib.defaultUserSavePromise(jobArr);

      res.send({createdSuccess: true});
    }
  }
  catch(err) {
    console.log('-- error --');
    console.error(err);
  }
});


// express router
const apiRoutes = express.Router();

//
apiRoutes.get('/', function(req, res) {
  res.json({ message: 'Welcome to the boring API' });
});

apiRoutes.get('/defaultUser', function(req, res) {
  // User find all
  // callback, err, back users
  User
    .findOne({username: 'kenpeter'})
    .populate({
      path: 'jobs',
      populate: { path: 'company' }
    })
    .exec(function (err, user) {
      if (err) {
        console.log('-- get default user error --');
        console.log(err);
        res.json({ error: true });
      }
      else {
        console.log('-- api get default user --');
        //console.log(user);
        res.json({user: user});
      }

    });
});



// use the actual api
app.use('/api', apiRoutes);


// listen
app.listen(port);
console.log('Magic happens at http://localhost:' + port);
