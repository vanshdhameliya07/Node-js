const express = require(`express`);

const route = express.Router();

const { loginpage, dashboardpage, registerpage, registerUser, loginUser, logoutUser, aboutpage, checkUser, productpage } = require(`../controller/Authcontroller`);


route.get(`/login`, loginpage);
route.get(`/about`, checkUser, aboutpage);
route.get(`/product`, checkUser, productpage);
route.get('/dashboard', dashboardpage);
route.get('/register', registerpage);
route.get(`/logoutuser`, logoutUser)

route.post('/registeruser', registerUser);

route.post('/loginuser', loginUser);


module.exports = route;