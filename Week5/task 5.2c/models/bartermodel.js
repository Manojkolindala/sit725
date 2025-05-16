const mongoose = require('mongoose');

const barterSchema = new mongoose.Schema({
  item: {
    type: String,
    required: true
  },
  description: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Barter', barterSchema);
