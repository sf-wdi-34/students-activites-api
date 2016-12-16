var db = require('./models');

var x = 10;
var studentList = [
  {
    firstName: "Ryan",
    lastName: "Thomas",
    monthsCoding: x,
    hometown: "New Jersey"
  },
  {
    firstName: "LD",
    lastName: "Dean",
    monthsCoding: 6,
    hometown: "Dallas",
    likesCoffee: false
  }
]

// db.Student is the student model - checking below
// var ryan = new db.Student({
//   firstName: "Ryan"
// });
//
// console.log(ryan);


// making one student
// var firstStudentData = studentList[0];
//
// var firstStudentDocument = new db.Student(firstStudentData);
// firstStudentDocument.save(function(err, savedStudent){
//   // code in here happens AFTER save finishes
//   if (err){
//     console.log('student save err', err);
//   } else {
//     console.log('console log #1', savedStudent);
//   }
// });
//
// // code out here might happen BEFORE save finishes
// console.log('console log #2', firstStudentDocument);

db.Student.remove({}, function(err, someQueryResponse){
  // want all this code to happen AFTER students are all deleted
  db.Student.create(studentList, function(err, createdStudents){
    console.log('created ' + createdStudents.length + ' students');
  });
});
