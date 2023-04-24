let express = require('express');
let router = express.Router();

let users = [
  { name: 'user1', email: 'user1@xyz.com', age: 23, id: 11123 },
  { name: 'user2', email: 'user2@xyz.com', age: 27, id: 11127 },
  { name: 'user3', email: 'user3@xyz.com', age: 25, id: 11125 },
];

router.get('/', (req, res) => {
  res.render('list', { users });
});

router.get('/new', (req, res) => {
  res.render('userForm');
});

router.post('/', (req, res) => {
  res.json(req.body);
});

router.put('/:id/edit', (req, res) => {
  let id = req.params.id;

  let user = users.find(user => user.id === Number(id));

  user.name = req.body.name;
  user.email = req.body.email;
  user.age = req.body.age;

  res.redirect('/users');
});

router.delete('/:id', (req, res) => {
  let id = req.params.id;

  users = users.filter((user) => user.id !== Number(id));
  res.redirect('/users');
});

module.exports = router;
