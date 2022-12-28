var express = require('express');

var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

app.listen(5000, function(){
  console.log("http://localhost:5000/")
})

module.exports = app;