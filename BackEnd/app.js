var express = require('express');

// require database connection 
const dbConnect = require("./db/dbConnect");

// execute database connection 
dbConnect();

var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

app.listen(5000, function(){
  console.log("http://localhost:5000/")
})

//module.exports = app;