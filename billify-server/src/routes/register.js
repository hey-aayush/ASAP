const router = require('express').Router()
const bcrypt = require('bcryptjs')
const Shopkeeper = require('../models/Shopkeeper')
const Customer = require('../models/Customer')
const flash = require('express-flash')
const mongoose = require('mongoose')
const User = require('../models/User')

router.use(flash())

////When a new user tries to register to our website
router.post("/register/shopkeeper",  (req, res) => { 
    ////checking if another user with same username already exists
	Shopkeeper.findOne({ email: req.body.email }, async (err, doc) => {
      	if (err) throw err;
      	if (doc){ 
	        var redir = {  redirect: "/register/shopkeeper", message:"Shopkeeper Already Exists"};
        	return res.json(redir);
    	}
      	if (!doc) {
        	////username and password is required during creation of an account
        	if(req.body.email.length==0){
          		var redir = {  redirect: "/register/shopkeeper", message:"Email cannot be empty"};
          		return res.json(redir);
        	}
        	if(req.body.password.length==0) {
          		var redir = {  redirect: "/register/shopkeeper", message:"Password cannot be empty"};
          		return res.json(redir);  
        	}

        	////encryption of password using bcrypt
        	const hashedPassword = await bcrypt.hash(req.body.password, 10);
            const id = mongoose.Types.ObjectId();
        	const newShopkeeper = new Shopkeeper({
          		email: req.body.email,
          		password: hashedPassword,
                name: req.body.name,
                shopName: req.body.shopName,
                storeId: id
        	});
        	await newShopkeeper.save();
            console.log(newShopkeeper);
            const newUser = new User({
                email: req.body.email,
                password: hashedPassword,
                name: req.body.name,
                userTypeId: newShopkeeper._id
            })
            await newUser.save();
        	var redir = { redirect: "/login/shopkeeper", message:"Shopkeeper Created", user: newShopkeeper};
        	return res.json(redir);
    	}
    });
});

////Checking if user is already logged in or not
router.get('/register/shopkeeper', (req, res) => {
    if (req.isAuthenticated()) {
        var redir = { redirect: "/", message:'Already Logged In' };
        return res.json(redir);
    }
    else{
      	var redir = { redirect: "/register/shopkeeper" , message:'Register Now'};
        return res.json(redir);
    }
});

////When a new user tries to register to our website
router.post("/register/customer",  (req, res) => { 
    ////checking if another user with same username already exists
	Customer.findOne({ email: req.body.email }, async (err, doc) => {
      	if (err) throw err;
      	if (doc){ 
	        var redir = {  redirect: "/register/customer", message:"Customer Already Exists"};
        	return res.json(redir);
    	}
      	if (!doc) {
        	////username and password is required during creation of an account
        	if(req.body.email.length==0){
          		var redir = {  redirect: "/register/customer", message:"Email cannot be empty"};
          		return res.json(redir);
        	}
        	if(req.body.password.length==0) {
          		var redir = {  redirect: "/register/customer", message:"Password cannot be empty"};
          		return res.json(redir);  
        	}

        	////encryption of password using bcrypt
        	const hashedPassword = await bcrypt.hash(req.body.password, 10);
        	const newCustomer = new Customer({
          		email: req.body.email,
          		password: hashedPassword,
				name: req.body.name
        	});
        	await newCustomer.save();
			const newUser = new User({
                email: req.body.email,
                password: hashedPassword,
                name: req.body.name,
				userTypeId: newCustomer._id
			})
			await newUser.save();
        	var redir = { redirect: "/login/customer", message:"Customer Created", user: newCustomer};
        	return res.json(redir);
    	}
    });
});

////Checking if user is already logged in or not
router.get('/register/customer', (req, res) => {
    if (req.isAuthenticated()) {
        var redir = { redirect: "/", message:'Already Logged In' };
        return res.json(redir);
    }
    else{
      	var redir = { redirect: "/register/customer" , message:'Register Now'};
        return res.json(redir);
    }
});

module.exports = router