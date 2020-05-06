const mongoose = require('mongoose');
const dbstring = process.env.DATABASE_URL;

const db = () => {
  mongoose.connect(dbstring, {useNewUrlParser: true, useUnifiedTopology: true});
}

module.exports = db;