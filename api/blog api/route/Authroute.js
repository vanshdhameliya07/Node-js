const express = require('express');

const route = express.Router();

const { register, loginuser, alluser } = require('../controller/Authcontroller');
const { verifyToken, authorise } = require('../middleware/Auth');

route.get('/alluser', verifyToken, authorise(['admin']), alluser)

route.post('/register', register);
route.post('/login', loginuser);

module.exports = route