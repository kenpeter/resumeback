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
