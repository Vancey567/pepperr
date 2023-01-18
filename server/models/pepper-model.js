const mongoose = require('mongoose');

const pepperSchema = new mongoose.Schema({
  heading: {
    type: String,
  },
  image: {
    type: String,
  },
  requestDemoCount: {
    type: Number,
    default: 0,
  },
});

const Pepper = mongoose.model('Pepper', pepperSchema);
module.exports = Pepper;