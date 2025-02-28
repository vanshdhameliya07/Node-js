const express = require(`express`);


const route = express.Router();

const { exsubcategorypage, ajaxCategorywiseRecord, exsubviewcategorypage, logOut, insertExsubcategory, deleteUser, edituser, UpdateExsubcategory } = require("../controller/Exsubcontroller.js");


route.get('/exaddsubcategory', exsubcategorypage);
route.get('/exviewsubcategory', exsubviewcategorypage);
route.get('/ajaxcategorywiserecord', ajaxCategorywiseRecord);
route.get('/logout', logOut);
route.get('/deleteuser', deleteUser);
route.get('/edituser', edituser)

route.post('/insertexsubcategory', insertExsubcategory);
route.post('/updateexsubcategory', UpdateExsubcategory)

module.exports = route;