//requires
let express = require('express');
let mongoose = require('mongoose');
let path = require('path');

let indexRouter = require('./routes/index');
let userRouter = require('./routes/users');

//connect to mongodb
mongoose.connect('mongodb://0.0.0.0:27017/userstore');

//instantiate express app
let app = express();

// middlewares
//setup view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: false }));

//setup static directory
app.use(express.static(path.join(__dirname, 'public')));

// routes middlewares
app.use('/', indexRouter);
app.use('/users', userRouter);

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
  console.log('3k');
});
