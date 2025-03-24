const express = require('express');

const route = express.Router();

const { registerpage, loginpage, registerUser, loginUser, dashboardpage } = require('../controller/Authcontroller');
const passport = require('passport');

route.get('/', loginpage)
route.get('/register', registerpage);
route.get('/dashboard', dashboardpage)

route.post('/registeruser', registerUser)
route.post('/loginuser', passport.authenticate('local', { failureRedirect: '/' }), loginUser)

module.exports = route