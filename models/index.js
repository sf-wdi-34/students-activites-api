// models/index.js

// require mongoose
var mongoose = require('mongoose');

// connect to database
mongoose.connect('mongodb://localhost/student-app');

// requires then exports the student model
module.exports.Student = require('./student.js');
