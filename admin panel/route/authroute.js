const express = require('express');

const route = express.Router();


const { registerpage, loginpage, registerUser, loginUser, aboutpage, dashboardpage, logOut, Otppage, forgotpage, emailuser, otpPage, userOtp, newpasswordpage, usernewPassword } = require('../controller/Authcontroller')

const passport = require('passport');

// get method 
route.get('/register', registerpage);
route.get('/', loginpage);
route.get('/about', passport.checkUser, aboutpage);
route.get('/dashboard', dashboardpage);
route.get('/logout', logOut);
route.get('/otp', Otppage);
route.get('/forgot', forgotpage);
route.get('/otp', otpPage);
route.get('/newpassword', newpasswordpage);


// post method 
route.post('/registeruser', registerUser);
route.post('/loginuser', passport.authenticate('local', { failureRedirect: '/' }), loginUser);
route.post('/emailuser', emailuser);
route.post('/userotp', userOtp);
route.post('/usernewpassword', usernewPassword);


module.exports = route