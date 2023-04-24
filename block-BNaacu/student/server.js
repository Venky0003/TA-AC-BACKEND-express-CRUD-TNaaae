let express = require('express');
let path = require('path');
let studentRoute = require('./routes/students');
let app = express();

// ejs middleware
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// routing middlewares
app.use('/students', studentRoute);

// error handler
app.use((req, res, next) => {
  res.send('Page Not Found');
});

app.listen(7000, () => {
  console.log('Server Listening on Port 7k');
});
