const router = require('express').Router()
const passport = require('passport')
const flash = require('express-flash')
const Customer = require('../models/Customer')
const Shopkeeper = require('../models/Shopkeeper')

router.use(flash())

router.post("/login/shopkeeper",  (req, res, next) => { // req is request, res is response
    passport.authenticate("local", (err, user, info) => {
      	if (err) throw err;  
      	if (!user) {
        	var redir = {  message:"Incorrect Email or Wrong Password"};
        	return res.json(redir);
    	} 
      	else {
        	req.logIn(user, async (err) => {
          		if (err) throw err;
				const shopkeeper = await Shopkeeper.findOne({
					email: req.user.email
				})
          		var redir = { redirect: "/" , message:"Login Successfully" , email:req.user.email , user: shopkeeper };
          		///// redir is the redirect information passed to front end react app.
          		return res.json(redir);
        	});
      	}
    })(req, res, next);
});

router.get('/login/shopkeeper', async (req, res) => {
    if (req.isAuthenticated()) {
		const shopkeeper = await Shopkeeper.findOne({
			email: req.user.email
		})
		// console.log("login user", user)
        var redir = { redirect: "/" , message:'Already Logged In', email:req.user.email , user: shopkeeper};
        return res.json(redir);
    }
    else{
      	var redir = { redirect: "/login/shopkeeper", message:'Enter your credentials to Log In' };
        return res.json(redir);
    }
});

router.post("/login/customer",  (req, res, next) => { // req is request, res is response
    passport.authenticate("local", (err, user, info) => {
      	if (err) throw err;  
      	if (!user) {
        	var redir = {  message:"Incorrect Email or Wrong Password"};
        	return res.json(redir);
    	} 
      	else {
        	req.logIn(user, async (err) => {
          		if (err) throw err;
				const customer = await Customer.findOne({
					email: req.user.email
				})
          		var redir = { redirect: "/" , message:"Login Successfully" , email:req.user.email , user: customer };
          		///// redir is the redirect information passed to front end react app.
          		return res.json(redir);
        	});
      	}
    })(req, res, next);
});

router.get('/login/customer', async (req, res) => {
    if (req.isAuthenticated()) {
		const customer = await Customer.findOne({
			email: req.user.email
		})
		// console.log("login user", user)
        var redir = { redirect: "/" , message:'Already Logged In', email:req.user.email , user: customer};
        return res.json(redir);
    }
    else{
      	var redir = { redirect: "/login/customer", message:'Enter your credentials to Log In' };
        return res.json(redir);
    }
});

router.get('/logout', (req, res) => {
	req.logOut() ;   // logOut function by Passport
	req.session.destroy();
	return res.status(200).json({message: 'LOGOUT_SUCCESS'});
})

module.exports = router