const express = require('express');

const route = express.Router();


const { registerpage, loginpage, registerUser, loginUser, dashboardpage, logOut, Otppage, newpassword, emailOtp, userOtp, Usernewpassword } = require('../controller/Authcontroller')

const passport = require('passport');

// get method 
route.get('/register', registerpage);
route.get('/', loginpage);
route.get('/dashboard', passport.checkUser, dashboardpage);
route.get('/logout', logOut);
route.get('/otp', Otppage);
route.get('/newpassword', newpassword);


// post method 
route.post('/registeruser', registerUser);
route.post('/loginuser', passport.authenticate('local', { failureRedirect: '/' }), loginUser);
route.post('/emailotp', emailOtp);
route.post('/userotp', userOtp);
route.post('/usernewpassword', Usernewpassword);


module.exports = route