// make an express app
var express = require('express');
var app = express();

// body parser

// require models
var db = require('./models');  // models folder - not index.js
                               // because node knows to look for index.js if you requrie a folder
// db.Student is the student model - checking below
// var ryan = new db.Student({
//   firstName: "Ryan"
// });
//
// console.log(ryan);


// Routes
// app.verb(path....)
app.get('/', function(request, response){
  response.send('Success!');
});

// routes for students
// - `GET	/students`	 	  display a list of all students
app.get('/students', function(request, response){
  db.Student.find({}, function(sadface, students){
    if (sadface) {
      response.status(500).send('server error');
    } else {
      response.json(students); //sends as JSON
    }
  });
});

// - `POST	/students`	    create a new student

// - `GET	/students/1`	  display a specific student
// - `PUT	/students/1`	  update a specific student
// - `DELETE	/students/1`  delete a specific student


// start server (listening)
app.listen(3000, function(){
  console.log('The server is running!');
});
