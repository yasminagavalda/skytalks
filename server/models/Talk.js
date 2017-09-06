const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId
const collection = 'talks'

var TalkSchema = new Schema({
  language: String,
  level: String,
  place: String,
  date: Date,
  creator: { type: ObjectId, ref: 'User' },
  joiners: [{ type: ObjectId, ref: 'User' }],
  joined: { type: ObjectId, ref: 'User' },
  available: Boolean
}, { collection })

module.exports = mongoose.model('Talk', TalkSchema)
