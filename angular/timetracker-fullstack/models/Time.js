const mongoose = require('mongoose')
const Schema = mongoose.Schema

const timeSchema = new Schema({
  date: {
    type: String,
    required: true
  },
  started: {
    type: Date,
    required: true,
  },
  ended: {
    type: Date,
    required: false
  },
  comment: {
    type: String,
    required: false
  },
  user: {
    ref: 'users',
    type: Schema.Types.ObjectId
  }
})

module.exports = mongoose.model('time', timeSchema)
