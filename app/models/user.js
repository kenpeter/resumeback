//
const config = require('../../config');
//
const mongoose = require('mongoose');
//
mongoose.Promise = require('bluebird');
//
const conn = mongoose.createConnection(config.database);
//
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  displayName: String,
  username: String,
  password: String, // Hack
  admin: Boolean
  jobs: [Schema.Types.ObjectId],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
})

const User = conn.model('User', UserSchema);
module.exports = User;
