const jwt = require('jsonwebtoken');
const router = require('express').Router();
const User = require('../../app/models/user');

const app = require('../../resumeback');

router.post('/auth', function(req, res){
  // find one user
  User.findOne({
    username: req.body.username
  }, function(err, user) {
    if (err) throw err;

    // 1. no such user
    if (!user) {
      res.json({ success: false, message: 'No such user' });
    }
    else if (user) {
      // 2. user there, but pass not equal
      // note: normally we don't store plain password
      if (user.password != req.body.password) {
        // pass not equal
        res.json({ success: false, message: 'Wrong password.' });
      }
      else {
        // 3. pass and user all good
        // user obj is injected into token as well.
        let token = jwt.sign(user, app.get('superSecret'), {
          expiresIn : 60*60*24 // 24 hours
        });

        // send token out.
        res.json({
          success: true,
          message: 'Your token',
          token: token
        }); // end json
      } // end else
    } // end else if
  }); // end find one
}); // end post


router.get('/defaultUser', function(req, res) {
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
    }); // end exec
});

module.exports = router;
