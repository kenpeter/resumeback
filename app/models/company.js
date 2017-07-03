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

const CompanySchema = new Schema({
  displayName: String,
  name: String,
  description: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
})

const Company = conn.model('Company', CompanySchema);
module.exports = Company;
