let express = require('express');
let path = require('path');

let app = express();

// middlewares
app.use(express.json());

// setup view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(5000, () => {
  console.log('Server Listening on Port 5k');
});
