const express = require(`express`);


const route = express.Router();

const { exsubcategorypage, ajaxCategorywiseRecord, exsubviewcategorypage, logOut, insertExsubcategory, deleteUser, edituser, UpdateExsubcategory, Changestatus } = require("../controller/Exsubcontroller.js");

const passport = require('passport')

route.get('/exaddsubcategory', passport.checkUser, exsubcategorypage);
route.get('/exviewsubcategory', passport.checkUser, exsubviewcategorypage);
route.get('/ajaxcategorywiserecord', ajaxCategorywiseRecord);
route.get('/logout', logOut);
route.get('/deleteuser', deleteUser);
route.get('/edituser', edituser)
route.get('/changestatus', Changestatus)

route.post('/insertexsubcategory', insertExsubcategory);
route.post('/updateexsubcategory', UpdateExsubcategory)

module.exports = route;