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

const JobSchema = new Schema({
  company: Schema.Types.ObjectId,
  jobTitle: String,
  description: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
})

const Job = conn.model('Job', JobSchema);
module.exports = Job;
