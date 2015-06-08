var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Login' });
  res.send('login');
});

router.post('/', function(req, res, next) {
  res.render('login', { title: 'Login' });
  res.send('You have successfully logged in!');
});

module.exports = router;
