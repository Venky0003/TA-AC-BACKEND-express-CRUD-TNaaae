let express = require('express');
let router = express.Router();

router.get('/new', (req, res) => {
  res.render('userForm');
});

router.post('/', (req, res) => {
  res.json(req.body);
});

router.post('/', (req, res) => {
  res.json(req.body);
});

router.get('/:id', (req, res) => {
  res.render('singleUser', {
    user: { name: 'Raj', email: 'raj@gmail.com', age: 27 },
  });

  router.put('/:id', (req, res) => {
    let id = req.params.id;

    users.forEach((user) => {
      if (user.id === Number(id)) {
        user.name = req.body.name;
        user.email = req.body.email;
        user.age = req.body.age;
      }
    });
    res.render('/users');
  });

  router.delete('/:id', (req, res) => {
    let id = req.params.id;

    users = users.filter((user) => user.id !== Number(id));
    res.render('/users');
  });
});

module.exports = router;
