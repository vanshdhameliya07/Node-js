const express = require(`express`);

const route = express.Router();

const { loginpage, registerpage, dashboardpage, registerUser, loginUser, logOut } = require(`../controller/Authcontroller`);
const { CheckUser } = require("../middleware/CheckUser");

route.get(`/`, loginpage);
route.get(`/register`, registerpage);
route.get(`/logout`, logOut)


route.post(`/registeruser`, registerUser);
route.post(`/loginuser`, loginUser)

module.exports = route;