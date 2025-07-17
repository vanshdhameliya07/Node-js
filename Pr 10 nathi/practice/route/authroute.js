const express = require(`express`);

const route = express.Router();

const { loginpage } = require(`../controller/Authcontroller`);

route.get(`/`, loginpage)

module.exports = route