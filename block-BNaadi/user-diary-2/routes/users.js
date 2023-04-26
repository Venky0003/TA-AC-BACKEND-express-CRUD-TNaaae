let express = require('express');
let router = express.Router();
let User = require('../models/user');

router.get('/', (req, res) => {
  User.find({}).then((users) => {
    console.log(users);
    res.render('listUser', { users: users });
  });
});

router.post('/', (req, res) => {
  User.create(req.body)
    .then((user) => {
      //   res.render('users', { user: user });
      res.redirect('/users');
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ message: err.message });
    });
});

router.get('/:id', (req, res) => {
  let id = req.params.id;
  User.findById(id)
    .then((user) => {
      res.render('singleUser', { user: user });
    })
    .catch((err) => {
      console.error(err);
    });
});

router.put('/:id', (req, res) => {
  let id = req.params.id;
  User.findByIdAndUpdate(id, req.body)
    .then((user) => {
      res.redirect('/users/' + id);
    })
    .catch((err) => {
      console.error(err);
    });
});

router.delete('/:id', (req, res) => {
  let id = req.params.id;

  User.findByIdAndDelete(id)
    .then((user) => {
      res.redirect('/users');
    })
    .catch((err) => {
      console.error(err);
    });
});

module.exports = router;
