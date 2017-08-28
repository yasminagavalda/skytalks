const mongoose = require('mongoose');
const collection = 'talks'

var TalkSchema = new mongoose.Schema({

  language: String,
  level: String,
  place: String,
  date: Date,
  creator: { type: mongoose.Schema.ObjectId, ref: "User" }, 
  joiners: { type: mongoose.Schema.ObjectId, ref: "User" },
  joined: { type: mongoose.Schema.ObjectId, ref: "User" },
  available: Boolean
}, { collection })

module.exports = mongoose.model('Talk', TalkSchema);