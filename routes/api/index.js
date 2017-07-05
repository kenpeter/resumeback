var router = require('express').Router();

router.get('/auth', function(req, res){
  res.json('auth page');
});

module.exports = router;
