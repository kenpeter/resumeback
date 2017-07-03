// model
const User = require('./app/models/user');
const Company = require('./app/models/company');
const Job = require('./app/models/job');

User.remove({}, function(err, res){
  console.log('-- remove user --');

  Company.remove({}, function(err, res){
    console.log('-- remove company --');

    Job.remove({}, function(err, res) {
      console.log('-- remove job --');

      console.log('-- all done --');
      process.exit(0);
    })
  });
});
