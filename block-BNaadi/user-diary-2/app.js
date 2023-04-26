let express = require('express');
let mongoose = require('mongoose');
let path = require('path');
let usersRouter = require('./routes/users');

mongoose.connect('mongodb://0.0.0.0:27017/user-diary-2');

// instantiate app
let app = express();

// middlewares

// setup view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// static directory
app.use(express.static(path.join(__dirname, 'public')));

// routing middleware
app.use('/users', usersRouter);

//error handlers

// 404
app.use((req, res, next) => {
  res.send('Page Not Found');
});

// cutom error
app.use((err, req, res, next) => {
  res.send(err);
});

app.listen(7000, () => {
  console.log('7k');
});
