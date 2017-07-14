'use strict';

var path = process.cwd();
var User=require (path+ '/app/controllers/user.server.js');
module.exports = function (app, passport) {

	function isLoggedIn (req, res, next) {
	
		if (req.isAuthenticated()) {
			return next();
		} else {
		    req.flash('error_msg','You need to login');
			res.redirect('/login');
		}
	}

	var user= new User();
	
	
	app.route('/')
		.get(function (req, res) {
			res.sendFile(path + '/public/index.html');
		});
};