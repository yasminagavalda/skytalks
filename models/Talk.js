const mongoose = require('mongoose');
const collection = 'talks'

var TalkSchema = new mongoose.Schema({
  language: String,
  level: String,
  place: String,
  date: Date,
  creator: String,
  joiners: Array,
  joined: String,
  available: Boolean
}, { collection })

module.exports = mongoose.model('Talk', TalkSchema);