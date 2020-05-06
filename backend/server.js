const express = require('express');
const cors = require('cors');
require('dotenv').config();
const db = require('./db/db');
const Job = require('./model/Job')

const PORT = process.env.PORT || 5000;
const app = express();
db();

app.use(express.json());
app.use(cors({
}))

app.get('/', async (req, res, next) => {
  try {
    const jobs = await Job.find({}).sort({created_at: -1});

    res.status(200).json({ response: jobs })
  } catch (error) {
    next(error);
  }
});

app.post('/job/create', async (req, res, next) => {
  try {
    const {
      title,
      description,
      min_salary,
      max_salary,
      company_name,
      job_location,
      last_date_to_submit,
      contact_email,
      contact_num,
      starting_date,
      technologies
    } = req.body;

    const job = Job({
      title,
      description: description,
      min_salary,
      max_salary,
      company_name,
      job_location,
      last_date_to_submit,
      contact_email,
      contact_num,
      starting_date,
      technologies: technologies.split(","),
      created_at: Date.now()
    })

    await job.save();

    res.status(200).json({ response: 'Your job has been created! :D' });
  } catch (error) {
    next(error);
  }
});

app.listen(PORT, () => console.log(`The app is running on port ${PORT}`));
