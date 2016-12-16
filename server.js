// make an express app
var express = require('express');
var app = express();

// body parser to get info from request body (form data)
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

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
app.post('/students', function(request, response){
  // grab student info from request body
  var studentInfo = {
    // these could be the same if we design and document API carefully
    firstName: request.body.firstName,
    lastName: request.body.lastName,
    monthsCoding: Number(request.body.monthsOfCoding),
    // monthsCoding: parseInt(request.body.monthsOfCoding),
    hometown: request.body.hometown,
    currentTown: request.body.currentTown,
    likesCoffee: request.body.coffee
  };
  // make a new student with student info
  var newStudent = new db.Student(studentInfo);
  newStudent.save(function(err, student){
    // all the code in here executes AFTER student saves (or error)
    if (err){
      response.status(500).send('database error');
      return console.log('error', err);
    } else {
      response.json(student);
    }
  });
});

// - `GET	/students/1`	  display a specific student
app.get('/students/:id', function(request, response){
  // find the correct student by id
  db.Student.findOne({ _id: request.params.id }, function(err, foundStudent){
    // if err
    if (err){
      response.status(500).send('error: ', err);
    } else {
      // else (we found the student!)
      // send back student Data
      response.json(foundStudent);
    }
  });
});


// - `PUT	/students/1`	  update a specific student
// - `PATCH /students/1` Brianna's preference
app.patch('/students/:id', function(request, response){
  // find the correct student by id
  db.Student.findOne({ _id: request.params.id }, function(err, foundStudent){
    // if err
    if (err){
      response.status(500).send('error: ', err);
    } else {
      console.log('found student', foundStudent);
      // else (we found the student!) - foundStudent
      // update student data from form data (user entered on client side)
      // grab new student info from request body
      foundStudent.firstName = request.body.firstName;
      if (request.body.lastName){
        foundStudent.lastName = request.body.lastName;
      }
      foundStudent.monthsCoding = Number(request.body.monthsOfCoding);
      // foundStudent.monthsCoding = parseInt(request.body.monthsOfCoding);
      foundStudent.hometown = request.body.hometown || foundStudent.hometown;
      foundStudent.currentTown = request.body.currentTown || foundStudent.currentTown;
      foundStudent.likesCoffee = request.body.coffee || foundStudent.likesCoffee;
      // save modified student
      foundStudent.save(function(err, savedStudent){
        if (err){
          response.status(500).send('database error');
        } else {
          // send back student Data
          response.json(foundStudent);
        }
      })
    }
  });
});

// UNTESTED
// app.patch('/students/:id', function(request, response){
//   // find and update one student by id
//   db.Student.findByIdAndUpdate(request.params.id,
//     {
//       $set: {
//         firstName: request.body.firstName,
//         hometown: request.body.hometown
//       }
//     },
//     {
//       new: true  // says to use the updated version in callback
//     },
//     function(err, updatedStudent){
//       if (err) {
//         response.status(500).send('database error!');
//       } else {
//         res.send(tank);
//       }
//     });  // end of findByIdAndUpdate
//   }); // end of route handler callback
// });



// - `DELETE	/students/1`  delete a specific student


// start server (listening)
app.listen(3000, function(){
  console.log('The server is running!');
});
