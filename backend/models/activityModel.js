const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const activitySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  ageGroup: {
    type: String,
    required: true,
  },
  tutor: {
    type: String,
    require: true,
  },
  fee: {
    type: Number,
    require: true,
  },
});

module.exports = mongoose.model('Activity', activitySchema);
