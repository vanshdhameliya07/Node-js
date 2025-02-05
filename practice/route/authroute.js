const express = require(`express`);

const route = express.Router();

const { loginpage, loginUser } = require(`../controller/Authcontroller`)

route.use(`/`, loginpage);

route.use(`/loginuser`, loginUser)

module.exports = route;