// lib
const mylib = require('../../lib/lib');

var router = require('express').Router();

router.get('/', async function(req, res) {
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

module.exports = router;
