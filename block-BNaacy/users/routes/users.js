let express = require('express');
let router = express.Router();
let User = require('../models/user');

router.get('/', (req, res) => {
  res.render('users');
});

router.get('/new', (req, res) => {
  res.render('userForm');
});

router.post('/', (req, res) => {
  User.create(req.body)
    .then((result) => {
      res.redirect('/');
    })
    .catch((err) => {
      if (err) return res.redirect('users/new');
    });
});

module.exports = router;
