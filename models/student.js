// models/student.js

// require mongoose
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// make a schema
// reference: http://mongoosejs.com/docs/schematypes.html
var studentSchema = new Schema({
  firstName: String,
  lastName: String,
  monthsCoding: Number,
  hometown: String,
  currentTown: {
    type: String,
    default: "San Francisco"
  },
  likesCoffee: {
    type: Boolean,
    default: true
  },
  updated: {
    type: Date,
    default: Date.now
  } //,
  // activities: [] // reference somehow
});

// make a model
var Student = mongoose.model('Student', studentSchema);

// export Student model so it can be accessed in other files (like server.js)
module.exports = Student;

// var ryan = new Student({
//   firstName: "Ryan"
// });
//
// console.log(ryan);


// - first name
// - last name
// - months of coding experience
// - education level
// - favorite clothing
// - hometown
// - current town
// - class
// - age
// - coffee (likes coffee - true or false)
// - num meals per day
// - profile:
//   - height, weight, hair color
// - likesOutdoorActivities
