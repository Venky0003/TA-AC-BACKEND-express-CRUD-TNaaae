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
  User.create(req.body).then((result) => {
    res.send({ clt: result, msg: 'added user successfully' });
    res.redirect('/users');
  });
});

module.exports = router;
