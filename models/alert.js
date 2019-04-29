const mongoose = require('mongoose')

const Alert = mongoose.model('Alert', {
  type: String,
  label: String,
  status: String,
  from: Date,
  to: Date,
})

exports.Alert = Alert