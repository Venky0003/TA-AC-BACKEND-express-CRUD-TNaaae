let express = require('express');
let mongoose = require('mongoose');
let path = require('path');
let usersRouter = require('./routes/users');

mongoose.connect('mongodb://0.0.0.0:27017/userstore');

let app = express();

// middlewares
// setup ejs engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//setup form middleware
app.use(express.urlencoded({ extended: false }));

//setup static directory
app.use(express.static(path.join(__dirname, 'public')));

// routes middlewares

app.use('/users', usersRouter);

// error handlers
//404
app.use((req, res, next) => {
  res.send('Page Not Found');
});
//custom error handler
app.use((err, req, res, next) => {
  res.send(err);
});

app.listen(5000, () => {
  console.log('5k');
});
