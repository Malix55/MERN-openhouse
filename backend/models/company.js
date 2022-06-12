const mongoose = require("mongoose");

var SchemaTypes = mongoose.Schema.Types;
const companySchema = new mongoose.Schema({
  company: {
    type: String,
  },
  name: {
    type: String,
  },
  cnic: {
    type: String,
  },
  number: {
    type: String,
  },
  designation: {
    type: String,
  },
  name1: {
    type: String,
  },
  cnic1: {
    type: String,
  },
  number1: {
    type: String,
  },
  designation1: {
    type: String,
  },
  name2: {
    type: String,
  },
  cnic2: {
    type: String,
  },
  number2: {
    type: String,
  },
  designation2: {
    type: String,
  },
});

const Company = mongoose.model("Company", companySchema);

module.exports = Company;
