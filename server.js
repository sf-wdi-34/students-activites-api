// make an express app
var express = require('express');
var app = express();

// body parser

// require models
// var db = require('./models');

// Routes
// app.verb(path....)
app.get('/', function(request, response){
  response.send('Success!');
});


// start server (listening)
app.listen(3000, function(){
  console.log('The server is running!');
});
