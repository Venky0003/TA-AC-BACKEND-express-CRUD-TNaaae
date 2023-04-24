let express = require('express');
let router = express.Router();

// routes

//create student form
router.get('/new', (req, res) => {
  res.send('Students Form');
  // res.render('forms.ejs')
});

//data
router.post('/', (req, res) => {
  //grab the data
  //save data to database
  // send a response
});

//  fetch all students list
router.get('/', (req, res) => {
  //list all students
  res.render('students', { list: ['ankit', 'suraj', 'prashant', 'ravi'] });
});

//  single book details
router.get('/student', (req, res) => {
  //list a singleform by id
  //send response with form data
  res.render('studentDetail', {
    student: { name: 'rahul', email: 'rahul@altcampus.io' },
  });
});

//update the specific book
router.get('/:id/edit', (req, res) => {
  //find the book by database
  //render a update form data
});

//  uodate it with new data from form
router.put('/:id', (req, res) => {
  //findByIdAndUpadate
});

router.delete('/:id ', (req, res) => {
  //delete using id
});

module.exports = router;
