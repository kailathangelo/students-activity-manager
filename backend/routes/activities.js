const express = require('express');
const router = express.Router();

const {
  createActivity,
  getActivities,
  deleteActivity
} = require('../controllers/activityController');


// GET all activities
router.get('/', getActivities);

// POST a new activity
router.post('/', createActivity);

// DELETE an activity
router.delete('/:id', deleteActivity)

module.exports = router;
