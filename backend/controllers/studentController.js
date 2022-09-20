const mongoose = require('mongoose');
const Student = require('../models/studentModel');

// get all students

const getStudents = async (req, res) => {
  console.log('all students..');
  const students = await Student.find({}).sort({ createdAt: -1 });
  res.status(200).json(students);
};

// create a new student

const createStudent = async (req, res) => {
  const {
    studentName,
    grade,
    guardianName,
    contactNoGuardian,
    authorisedPerson,
    authorisedPersonID,
    activities,
  } = req.body;

  let emptyFields = [];

  if (!studentName) {
    emptyFields.push('name');
  }

  if (!grade) {
    emptyFields.push('age group');
  }

  if (!guardianName) {
    emptyFields.push('tutor');
  }

  if (!contactNoGuardian) {
    emptyFields.push('fee');
  }

  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: 'Please fill in all the fields', emptyFields });
  }

  // add doc to db

  try {
    const student = await Student.create({
      studentName,
      grade,
      guardianName,
      contactNoGuardian,
      authorisedPerson,
      authorisedPersonID,
      activities,
    });
    res.status(200).json(student);
  } catch (error) {
    response.status(400).json({ error: error.message });
  }
};

const getstudentWithActivity = async (req, res) => {
  console.log('students with an activity');
  const activityName = await req.params.activity;
  const students = await Student.find({ activities: activityName });
  res.status(200).json(students);
};

module.exports = {
  createStudent,
  getStudents,
  getstudentWithActivity,
};
