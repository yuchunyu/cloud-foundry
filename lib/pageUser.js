
exports.login = function(req, res){
	var email = req.body.email;
	var password = req.body.password;

	var tempUser = {
		email : 'yuchunyu@goyoo.com',
		password : '111111'
	};
	if(tempUser.email == email && tempUser.password == password){
		console.log(111);
		res.render('index', { title: 'Express' });
	}else{
		res.send({"status": -1, msg: '对不起，帐户密码不正确。'});
	}
}