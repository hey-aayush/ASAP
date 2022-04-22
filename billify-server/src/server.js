require('dotenv').config();

const express = require('express');

const app = express();

require('./config/dbConnection');

const cors = require("cors");
const passport = require("passport"); // passport-local used for user authentication
const passportLocal = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");
const session = require("express-session");
const bodyParser = require("body-parser");
const flash = require("express-flash");

app.use(flash());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

////cors is used to allow cross-origin request

app.use(
  	cors({
	    origin: "http://localhost:3000", 
    	methods: [ "GET", "POST" ],
    	credentials: true,
  	})
);

app.use(
    session({
      	secret: "secretcode",
      	resave: true,
      	saveUninitialized: true,
    })
);

app.use(cookieParser("secretcode"));

////Initializing local-passport for user authentication
app.use(passport.initialize());
app.use(passport.session());
require("./config/passport-config")(passport);

const registerRoute = require('./routes/register')                  //Register route
app.use(registerRoute)

const loginRoute = require('./routes/login')                        //Login route
app.use(loginRoute)

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
})