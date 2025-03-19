const express = require('express');

const route = express.Router();

const { registerpage, loginpage, registerUser, loginUser, dashboardpage } = require('../controller/Authcontroller');

route.get('/', loginpage)
route.get('/register', registerpage)
route.get('/dashboard', dashboardpage)

route.post('/registerdata', registerUser)
route.post('/loginuser', loginUser)

module.exports = route