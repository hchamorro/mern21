const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');
const app = express();
const PORT = process.env.PORT || 3002;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// add routes
app.use(routes);

// connect to db
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/moviedb');

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
