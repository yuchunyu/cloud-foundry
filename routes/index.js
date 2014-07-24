var express = require('express');
var router = express.Router();
var pageUser = require('../lib/pageUser');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('login', { title: 'Express' });
});
router.get('/manage', function(req, res) {
  res.render('manage', { title: 'Express' });
});
router.get('/logout', function(req, res) {
  res.render('login', { title: 'Express' });
});
router.get('/index', function(req, res) {
  res.render('index', { title: 'Express' });
});
router.get('/*', function(req, res) {
  res.render('login', { title: 'Express' });
});
// router.post('/login', pageUser.login);

module.exports = router;
