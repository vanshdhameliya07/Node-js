const express = require('express');

const route = express.Router();

const { Registerpage, Loginpage, registerUser, dashboardpage, loginUser } = require('../controller/Authcontroller');
const passport = require('passport');

route.get('/', Loginpage)
route.get('/register', Registerpage)
route.get('/dashboard', dashboardpage)

route.post('/registeruser', registerUser)
route.post('/loginuser', passport.authenticate(`local`, { failureRedirect: '/' }), loginUser)

module.exports = route;