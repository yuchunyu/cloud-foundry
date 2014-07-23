var express = require('express');
var router = express.Router();
var pageUser = require('../lib/pageUser');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.post('/login', pageUser.login);

module.exports = router;
