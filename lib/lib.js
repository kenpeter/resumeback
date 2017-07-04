// model
const User = require('../app/models/user');
const Company = require('../app/models/company');
const Job = require('../app/models/job');

// does default user already exist
// wrap promise in a func, then return it.
exports.doesDefaultUserExistPromise = function doesDefaultUserExistPromise() {
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
exports.defaultUserSavePromise = function defaultUserSavePromise() {
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

exports.defaultCompany1SavePromise = function defaultCompany1SavePromise() {
  return new Promise(function (resolve, reject) {
    const company = new Company({
      displayName: "Andatech",
      name: "andatech",
      jobTitle: "Full stack developer",
      url: "http://andatech.com.au/",
      description: "Andatech is a small company, but it is like small Amazon. I worked as a web developer to maintain/bug-fix/develop an in-house CRM system. The system is built on top of Backbone, Lodash, jQuery, Centos, Codeigniter, MySQL and AWS. Front-end and back-end are separated. The system is integrated with Gmail API, SMS API, Zoho CRM, Magento API. I also managed the company’s WHM server which running 10+ magento/wordpress websites. I also looked after the company’s VOIP phone system (on AWS), 3 Ubuntu servers (on AWS), 1 windows 2008 server. Working in a team of 3 developers, running daily scrum.",
      orderNum: 1,
    });

    company.save(function(err) {
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


// company 2
exports.defaultCompany2SavePromise = function defaultCompany2SavePromise() {
  return new Promise(function (resolve, reject) {
    const company = new Company({
      displayName: "Amber aviation",
      name: "amber",
      url: "https://amberaviationacademy.com.au/",
      jobTitle: "Full stack developer",
      description: "Currently, I am developing websites in Drupal 8. At the same time, I am managing their VPS server with WHM. I am also leanring React, Redux, Nodejs and Express. Checkout my current porjects at https://github.com/kenpeter",
      orderNum: 2,
    });

    company.save(function(err) {
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

// company 3
exports.defaultCompany3SavePromise = function defaultCompany3SavePromise() {
  return new Promise(function (resolve, reject) {
    const company = new Company({
      displayName: "iGloo software",
      name: "igloo",
      jobTitle: "Full stack developer",
      url: "http://igloosoftware.com.au/",
      description: "I developed firmware for blind controls and thermostats using Arduino, ESP8266 wifi chip and HM10 bluetooth chip. I managed 7 AWS instances and developed REST API with Laravel 5. I worked with 2 iOS developers, 1 Android and 3 hardware engineers together to develop projects on time.",
      orderNum: 3,
    });

    company.save(function(err) {
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


// company 4
exports.defaultCompany4SavePromise = function defaultCompany4SavePromise() {
  return new Promise(function (resolve, reject) {
    const company = new Company({
      displayName: "Fair scan",
      name: "fairscan",
      jobTitle: "Web developer",
      url: "http://fairscan.com.au/",
      description: "Freelancing, I made customization for their Magento websites on AWS.",
      orderNum: 4,
    });

    company.save(function(err) {
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



// company 5
exports.defaultCompany5SavePromise = function defaultCompany5SavePromise() {
  return new Promise(function (resolve, reject) {
    const company = new Company({
      displayName: "Fair scan",
      name: "fairscan",
      jobTitle: "Web developer",
      url: "http://fairscan.com.au/",
      description: "Freelancing, I made customization for their Magento websites on AWS.",
      orderNum: 5,
    });

    company.save(function(err) {
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


// company 6
exports.defaultCompany6SavePromise = function defaultCompany6SavePromise() {
  return new Promise(function (resolve, reject) {
    const company = new Company({
      displayName: "Anne street partner",
      name: "annestreet",
      jobTitle: "Web developer",
      url: "http://annestreetpartners.com.au/",
      description: "Freelancing, I made customization for their website with Wordpress and migrated it from AWS to a share host.",
      orderNum: 6,
    });

    company.save(function(err) {
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


// company 7
exports.defaultCompany7SavePromise = function defaultCompany7SavePromise() {
  return new Promise(function (resolve, reject) {
    const company = new Company({
      displayName: "University of Melbourne",
      name: "unimelb",
      jobTitle: "Full stack developer",
      url: "http://annestreetpartners.com.au/",
      description: "I developed and managed many websites for Faculty of Arts. They were ranging from simple html website, to Drupal 7 website or custom PHP applications. Technology we were using are Perl, PHP, Solaris, Centos, Debian and various frameworks",
      orderNum: 7,
    });

    company.save(function(err) {
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


// company 8
exports.defaultCompany8SavePromise = function defaultCompany8SavePromise() {
  return new Promise(function (resolve, reject) {
    const company = new Company({
      displayName: "Emersion software systems",
      name: "emersion",
      jobTitle: "Software developer",
      url: "https://www.emersion.com.au/",
      description: "Be part of a 8 people team, I developed billing system with in-house MVC framework. Technology ranged from Oracle, PHP and jQuery.",
      orderNum: 8,
    });

    company.save(function(err) {
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


// company 9
exports.defaultCompany9SavePromise = function defaultCompany9SavePromise() {
  return new Promise(function (resolve, reject) {
    const company = new Company({
      displayName: "Slattery media group",
      name: "slattery",
      jobTitle: "Full stack developer",
      url: "http://www.slatterymedia.com/",
      description: "I developed websites for AFL clients by using in-house CMS.",
      orderNum: 9,
    });

    company.save(function(err) {
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


// company 10
exports.defaultCompany10SavePromise = function defaultCompany10SavePromise() {
  return new Promise(function (resolve, reject) {
    const company = new Company({
      displayName: "R-co",
      name: "rco",
      jobTitle: "Web developer",
      url: "http://r-co.com.au/",
      description: "I developed websites for various clients by using in-house CMS.",
      orderNum: 10,
    });

    company.save(function(err) {
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
