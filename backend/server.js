require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const activityRoutes = require('./routes/activities');
const studentRoutes = require('./routes/students');

const app = express();
//this piece of code allows to access req body/obj for patch & post
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.get('/', (req, res) => {
  res.send('Hello AK!');
});


app.use('/api/activities', activityRoutes);

app.use('/api/students', studentRoutes);



mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`connected to db & listening on port ${process.env.PORT}`);
    });
  })
  .catch(() => {
    console.log(error);
  });
