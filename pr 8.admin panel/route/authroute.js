const express = require('express');

const route = express.Router();


const { registerpage, loginpage, registerUser, loginUser, dashboardpage, logOut, OtpPage, newPasswordPage, forgotPassword, userOtp, usernewPassword, } = require('../controller/Authcontroller')

const passport = require('passport');

// get method 
route.get('/register', registerpage);
route.get('/', loginpage);
route.get('/dashboard', passport.checkUser, dashboardpage);
route.get('/logout', logOut);
route.get('/otp', OtpPage);
route.get('/newpassword', newPasswordPage);

// post method 
route.post('/registeruser', registerUser);
route.post('/loginuser', passport.authenticate('local', { failureRedirect: '/' }), loginUser);
route.post('/forgotpassword', forgotPassword)
route.post('/userotp', userOtp)
route.post('/usernewpassword', usernewPassword)

module.exports = route