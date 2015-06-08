var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('register', { title: 'Register' });
  res.send('register');
});

router.post('/', function(req, res, next) {
  // res.render('register', { title: 'Register' });
  res.render('register', { name: req.body.user });
  console.log('register', { name: req.body.user });
  // res.send('You have successfully register!');
});

module.exports = router;