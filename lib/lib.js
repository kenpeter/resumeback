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
exports.defaultUserSavePromise = function defaultUserSavePromise(jobs) {
  return new Promise(function (resolve, reject) {
    // create a user
    const theUser = new User({
      displayName: 'Gary Liang',
      username: 'kenpeter',
      password: 'password',
      jobs: jobs,
      admin: true
    });

    // save it
    // save the sample user
    theUser.save(function(err, doc) {
      // err
      if (err) {
        let obj = { success: false };
        console.log(err);
        reject(obj);
      }
      else {
        console.log("-- newly saved user --");
        console.log(doc);
        resolve(doc);
      }
    });

  });
}

exports.defaultCompany1SavePromise = function defaultCompany1SavePromise() {
  return new Promise(function (resolve, reject) {
    const company = new Company({
      displayName: "Andatech",
      name: "andatech",
      url: "http://andatech.com.au/"
    });

    company.save(function(err, doc) {
      // err
      if (err) {
        let obj = { success: false };
        console.log(err);
        reject(obj);
      }
      else {
        console.log("-- company saved --");
        resolve(doc);
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
      url: "https://amberaviationacademy.com.au/"
    });

    company.save(function(err, doc) {
      // err
      if (err) {
        let obj = { success: false };
        console.log(err);
        reject(obj);
      }
      else {
        console.log("-- company saved --");
        resolve(doc);
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
      url: "http://igloosoftware.com.au/"
    });

    company.save(function(err, doc) {
      // err
      if (err) {
        let obj = { success: false };
        console.log(err);
        reject(obj);
      }
      else {
        console.log("-- company saved --");
        resolve(doc);
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
      url: "http://fairscan.com.au/"
    });

    company.save(function(err, doc) {
      // err
      if (err) {
        let obj = { success: false };
        console.log(err);
        reject(obj);
      }
      else {
        console.log("-- company saved --");
        resolve(doc);
      }
    });

  });
}


// company 5
exports.defaultCompany5SavePromise = function defaultCompany5SavePromise() {
  return new Promise(function (resolve, reject) {
    const company = new Company({
      displayName: "Anne street partner",
      name: "annestreet",
      url: "http://annestreetpartners.com.au/"
    });

    company.save(function(err, doc) {
      // err
      if (err) {
        let obj = { success: false };
        console.log(err);
        reject(obj);
      }
      else {
        console.log("-- company saved --");
        resolve(doc);
      }
    });

  });
}


// company 6
exports.defaultCompany6SavePromise = function defaultCompany6SavePromise() {
  return new Promise(function (resolve, reject) {
    const company = new Company({
      displayName: "University of Melbourne",
      name: "unimelb",
      url: "http://unimelb.edu.au/"
    });

    company.save(function(err, doc) {
      // err
      if (err) {
        let obj = { success: false };
        console.log(err);
        reject(obj);
      }
      else {
        console.log("-- company saved --");
        resolve(doc);
      }
    });

  });
}


// company 7
exports.defaultCompany7SavePromise = function defaultCompany7SavePromise() {
  return new Promise(function (resolve, reject) {
    const company = new Company({
      displayName: "Emersion software systems",
      name: "emersion",
      url: "https://www.emersion.com.au/"
    });

    company.save(function(err, doc) {
      // err
      if (err) {
        let obj = { success: false };
        console.log(err);
        reject(obj);
      }
      else {
        console.log("-- company saved --");
        resolve(doc);
      }
    });

  });
}


// company 8
exports.defaultCompany8SavePromise = function defaultCompany8SavePromise() {
  return new Promise(function (resolve, reject) {
    const company = new Company({
      displayName: "Slattery media group",
      name: "slattery",
      url: "http://www.slatterymedia.com/"
    });

    company.save(function(err, doc) {
      // err
      if (err) {
        let obj = { success: false };
        console.log(err);
        reject(obj);
      }
      else {
        console.log("-- company saved --");
        resolve(doc);
      }
    });

  });
}


// company 9
exports.defaultCompany9SavePromise = function defaultCompany9SavePromise() {
  return new Promise(function (resolve, reject) {
    const company = new Company({
      displayName: "R-co",
      name: "rco",
      url: "http://r-co.com.au/"
    });

    company.save(function(err, doc) {
      // err
      if (err) {
        let obj = { success: false };
        console.log(err);
        reject(obj);
      }
      else {
        console.log("-- company saved --");
        resolve(doc);
      }
    });

  });
}


// job 1
exports.defaultJob1SavePromise = function defaultJob1SavePromise(companyId) {
  return new Promise(function (resolve, reject) {
    const job = new Job({
      company: companyId,
      jobTitle: "Full stack developer",
      description: "Andatech is a small company, but it is like small Amazon. I worked as a web developer to maintain/bug-fix/develop an in-house CRM system. The system is built on top of Backbone, Lodash, jQuery, Centos, Codeigniter, MySQL and AWS. Front-end and back-end are separated. The system is integrated with Gmail API, SMS API, Zoho CRM, Magento API. I also managed the company’s WHM server which running 10+ magento/wordpress websites. I also looked after the company’s VOIP phone system (on AWS), 3 Ubuntu servers (on AWS), 1 windows 2008 server. Working in a team of 3 developers, running daily scrum.",
      orderNum: 1
    });

    job.save(function(err, doc) {
      // err
      if (err) {
        let obj = { success: false };
        console.log(err);
        reject(obj);
      }
      else {
        console.log("-- job saved --");
        resolve(doc);
      }
    });

  });
}

// job 2
exports.defaultJob2SavePromise = function defaultJob2SavePromise(companyId) {
  return new Promise(function (resolve, reject) {
    const job = new Job({
      company: companyId,
      jobTitle: "Full stack developer",
      description: "Currently, I am developing websites in Drupal 8. At the same time, I am managing their VPS server with WHM. I am also leanring React, Redux, Nodejs and Express. Checkout my current porjects at https://github.com/kenpeter",
      orderNum: 2
    });

    job.save(function(err, doc) {
      // err
      if (err) {
        let obj = { success: false };
        console.log(err);
        reject(obj);
      }
      else {
        console.log("-- job saved --");
        resolve(doc);
      }
    });

  });
}


// job 3
exports.defaultJob3SavePromise = function defaultJob3SavePromise(companyId) {
  return new Promise(function (resolve, reject) {
    const job = new Job({
      company: companyId,
      jobTitle: "Full stack developer",
      description: "I developed firmware for blind controls and thermostats using Arduino, ESP8266 wifi chip and HM10 bluetooth chip. I managed 7 AWS instances and developed REST API with Laravel 5. I worked with 2 iOS developers, 1 Android and 3 hardware engineers together to develop projects on time.",
      orderNum: 3
    });

    job.save(function(err, doc) {
      // err
      if (err) {
        let obj = { success: false };
        console.log(err);
        reject(obj);
      }
      else {
        console.log("-- job saved --");
        resolve(doc);
      }
    });

  });
}


// job 4
exports.defaultJob4SavePromise = function defaultJob4SavePromise(companyId) {
  return new Promise(function (resolve, reject) {
    const job = new Job({
      company: companyId,
      jobTitle: "Full stack developer",
      description: "Freelancing, I made customization for their Magento websites on AWS.",
      orderNum: 4
    });

    job.save(function(err, doc) {
      // err
      if (err) {
        let obj = { success: false };
        console.log(err);
        reject(obj);
      }
      else {
        console.log("-- job saved --");
        resolve(doc);
      }
    });

  });
}


// job 5
exports.defaultJob5SavePromise = function defaultJob5SavePromise(companyId) {
  return new Promise(function (resolve, reject) {
    const job = new Job({
      company: companyId,
      jobTitle: "Full stack developer",
      description: "Freelancing, I made customization for their website with Wordpress and migrated it from AWS to a share host.",
      orderNum: 5
    });

    job.save(function(err, doc) {
      // err
      if (err) {
        let obj = { success: false };
        console.log(err);
        reject(obj);
      }
      else {
        console.log("-- job saved --");
        resolve(doc);
      }
    });

  });
}


// job 6
exports.defaultJob6SavePromise = function defaultJob6SavePromise(companyId) {
  return new Promise(function (resolve, reject) {
    const job = new Job({
      company: companyId,
      jobTitle: "Full stack developer",
      description: "I developed and managed many websites for Faculty of Arts. They were ranging from simple html website, to Drupal 7 website or custom PHP applications. Technology we were using are Perl, PHP, Solaris, Centos, Debian and various frameworks",
      orderNum: 6
    });

    job.save(function(err, doc) {
      // err
      if (err) {
        let obj = { success: false };
        console.log(err);
        reject(obj);
      }
      else {
        console.log("-- job saved --");
        resolve(doc);
      }
    });

  });
}


// job 7
exports.defaultJob7SavePromise = function defaultJob7SavePromise(companyId) {
  return new Promise(function (resolve, reject) {
    const job = new Job({
      company: companyId,
      jobTitle: "Full stack developer",
      description: "Be part of a 8 people team, I developed billing system with in-house MVC framework. Technology ranged from Oracle, PHP and jQuery.",
      orderNum: 7
    });

    job.save(function(err, doc) {
      // err
      if (err) {
        let obj = { success: false };
        console.log(err);
        reject(obj);
      }
      else {
        console.log("-- job saved --");
        resolve(doc);
      }
    });

  });
}


// job 8
exports.defaultJob8SavePromise = function defaultJob8SavePromise(companyId) {
  return new Promise(function (resolve, reject) {
    const job = new Job({
      company: companyId,
      jobTitle: "Full stack developer",
      description: "I developed websites for AFL clients by using in-house CMS.",
      orderNum: 8
    });

    job.save(function(err, doc) {
      // err
      if (err) {
        let obj = { success: false };
        console.log(err);
        reject(obj);
      }
      else {
        console.log("-- job saved --");
        resolve(doc);
      }
    });

  });
}

// job 9
exports.defaultJob9SavePromise = function defaultJob9SavePromise(companyId) {
  return new Promise(function (resolve, reject) {
    const job = new Job({
      company: companyId,
      jobTitle: "Full stack developer",
      description: "I developed websites for various clients by using in-house CMS.",
      orderNum: 9
    });

    job.save(function(err, doc) {
      // err
      if (err) {
        let obj = { success: false };
        console.log(err);
        reject(obj);
      }
      else {
        console.log("-- job saved --");
        resolve(doc);
      }
    });

  });
}
