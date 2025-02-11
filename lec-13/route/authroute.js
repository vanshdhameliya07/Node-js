const express = require(`express`);

const route = express.Router();


const { registerpage, loginpage, registerUser } = require(`../controller/Authcontroller`)

route.get(`/register`, registerpage);
route.get(`/`, loginpage);


route.post(`/registeruser`, registerUser)

module.exports = route