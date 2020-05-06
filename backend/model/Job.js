const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const requiredString = {
  type: String,
  required: true,
}

const jobSchema = new Schema({
  title:  requiredString,
  description: requiredString,
  min_salary:   {
    type: Number,
    required: true
  },
  max_salary: Number,
  company_name: requiredString,
  job_location: requiredString,
  last_date_to_submit: {
    type: Date,
    required: true
  },
  contact_email: requiredString,
  contact_num: Number,
  starting_date: Date,
  technologies: Array,
  created_at: Date,
});

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;