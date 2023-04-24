let express = require('express');
let path = require('path');
let usersRoute = require('./routes/users');

let app = express();

app.use(express.urlencoded({extended: false}))

// view / ejs middlewares
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// routing middlewares
app.use('/users', usersRoute);

// error handlers
app.use((req, res, next) => {
  res.send('Page not Found');
});

app.listen(5000, () => {
  console.log('5k');
});
