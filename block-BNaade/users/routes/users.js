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

router.get('/:id/edit', (req, res, next) => {
  let id = req.params.id;
  User.findById(id)
    .then((user) => {
      res.render('editUserForm', { user: user });
    })
    .catch((err) => {
      if (err) return next(err);
    });
});

router.post('/:id', (req, res, next) => {
  let id = req.params.id;
  User.findByIdAndUpdate(id, req.body)
    .then((user) => {
      res.redirect('/users/' + id);
    })
    .catch((err) => {
      if (err) return next(err);
    });
});

module.exports = router;
