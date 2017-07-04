// connect to db
const mongoose = require('mongoose');

const conn = require('../../connect');

//
const Schema = mongoose.Schema;
//
const UserSchema = new Schema({
  displayName: String,
  username: String,
  password: String, // Hack
  admin: Boolean,
  jobs: [{type: Schema.Types.ObjectId, ref: 'Job'}],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});
//
const User = conn.model('User', UserSchema);
//
module.exports = User;
