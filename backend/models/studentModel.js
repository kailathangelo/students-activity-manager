const mongoose = require('mongoose');
const Schema = mongoose.Schema;
  

const studentSchema = new Schema({
  studentName: {
    type: String,
    required: true,
  },
  grade: {
    type: String,
    required: true,
  },
  guardianName: {
    type: String,
    require: true,
  },
  contactNoGuardian: {
    type: String,
    require: true,
  },
  authorisedPerson: {
    type: String,
    require: true,
  },
  authorisedPersonID: {
    type: String,
    require: true,
  },
  activities: {
    type: Array,
    require: true,
  }
});

module.exports = mongoose.model('Student', studentSchema);
