let express = require('express');
let router = express.Router();
let User = require('../models/user');

router.get('/', (req, res) => {
  User.find({}).then((users) => {
    // console.log(users);
    res.render('Users', { users: users });
  });
});

router.get('/new', (req, res) => {
  res.render('addUser');
});

router.post('/', (req, res) => {
  User.create(req.body).then((result) => {
    res.redirect('/users');
  });
});

router.get('/:id', (req, res) => {
  let id = req.params.id;

  User.findById(id)
    .then((user) => {
      //   console.log(user);
      res.render('userDetails', { user: user });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
