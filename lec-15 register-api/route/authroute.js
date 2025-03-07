const express = require('express');

const route = express.Router();

const { registeruser, loginUser, alluser } = require('../controller/Authcontroller');
const { verifyToken, authorise } = require('../midleware/Auth');

route.post('/register', registeruser);
route.post('/login', loginUser);
route.get('/alluser', verifyToken, authorise(["admin"]), alluser);

module.exports = route