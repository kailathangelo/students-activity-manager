const express = require('express');
const studentRouter = express.Router();

const {
  createStudent,
  getStudents,
  getstudentWithActivity
} = require('../controllers/studentController');




//Find students with an activity
studentRouter.get('/:activity', getstudentWithActivity);

// GET all Students
studentRouter.get('/', getStudents);

// POST a new student
studentRouter.post('/', createStudent);


// DELETE a student
// router.delete('/:id', deleteActivity)

module.exports = studentRouter;
