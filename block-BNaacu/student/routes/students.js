let express = require('express');
let router = express.Router();

// routes

//create student form
router.get('/new', (req, res) => {
  res.render('students');
  // res.render('forms.ejs')
});

//data
router.post('/', (req, res) => {
  res.send(req.body);
});

//  fetch all students list
router.get('/', (req, res) => {
  //list all students
  res.render('list', { list: ['ankit', 'suraj', 'prashant', 'ravi'] });
});

router.get('/:id', (req, res) => {
  res.render("studentDetail", {
    student: { name: "Rahul", email: "rahul@altcampus.io"}
  })
})

module.exports = router;
