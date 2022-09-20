const { response } = require('express');
const mongoose = require('mongoose');
const Activity = require('../models/activityModel');

// get all activities

const getActivities = async (req, res) => {
  const activities = await Activity.find({}).sort({ createdAt: -1 });
  res.status(200).json(activities);
};

// create a new activity

const createActivity = async (req, res) => {
  const { name, ageGroup, tutor, fee } = req.body;

  let emptyFields = [];

  if (!name) {
    emptyFields.push('name');
  }

  if (!ageGroup) {
    emptyFields.push('age group');
  }

  if (!tutor) {
    emptyFields.push('tutor');
  }

  if (!name) {
    emptyFields.push('fee');
  }

  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: 'Please fill in all the fields', emptyFields });
  }

  // add doc to db

  try {
    const activity = await Activity.create({ name, ageGroup, tutor, fee });
    res.status(200).json(activity);
  } catch (error) {
    response.status(400).json({ error: error.message });
  }
};


//  get a single activity
const getActivity = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such activity' });
  }
  try {
    const activity = await Activity.findById(id);
    res.status(200).json(activity);
  } catch (error) {
    response.status(400).json({ error: error.message });
  }
}

//  delete an activity
const deleteActivity = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such activity' });
  }
  try {
    const activity = await Activity.findOneAndDelete({ _id: id });
    res.status(200).json(activity);
  } catch (error) {
    response.status(400).json({ error: error.message });
  }


}

module.exports = {
  createActivity,
  getActivities,
  deleteActivity
};
