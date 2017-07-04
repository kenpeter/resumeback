//
const mongoose = require('mongoose');
//
const conn = require('../../connect');
//
const Schema = mongoose.Schema;

const JobSchema = new Schema({
  company: {type: Schema.Types.ObjectId, ref: 'Company' },
  jobTitle: String,
  description: String,
  orderNum: Number,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const Job = conn.model('Job', JobSchema);
module.exports = Job;
