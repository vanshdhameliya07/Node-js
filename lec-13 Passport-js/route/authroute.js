const express = require('express');

const route = express.Router();


const { registerpage, loginpage, registerUser, loginUser, aboutpage, dashboardpage, logOut } = require(`../controller/Authcontroller`)

const passport = require('passport');

// get method 
route.get(`/register`, registerpage);
route.get(`/`, loginpage);
route.get(`/about`, passport.checkUser, aboutpage);
route.get(`/dashboard`, dashboardpage);
route.get(`/logoutuser`, logOut);

// post method 
route.post(`/registeruser`, registerUser);
route.post(`/loginuser`, passport.authenticate(`local`, { failureRedirect: `/` }), loginUser);

module.exports = route