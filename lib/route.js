var express = require('express');
var router = express.Router();
var pageUser = require('./pageUser');

// /* GET home page. */
// router.get('/', function(req, res) {
//   res.render('manage/login', { title: 'Express' });
// });
// router.get('/manage', function(req, res) {
//   res.render('manage/manage', { title: 'Express' });
// });
// router.get('/logout', function(req, res) {
//   res.render('manage/login', { title: 'Express' });
// });
// router.get('/index', function(req, res) {
//   res.render('manage/index', { title: 'Express' });
// });
// router.get('/*', function(req, res) {
//   res.render('manage/login', { title: 'Express' });
// });
// router.post('/login', pageUser.login);




/* manage 后台管理部分 */

/* works 前台作品部分 */
//首页
router.get('/', function(req, res) {
  res.render('works/index', { title: 'Express' });
});
//外链项目
//内链作品


module.exports = router;
