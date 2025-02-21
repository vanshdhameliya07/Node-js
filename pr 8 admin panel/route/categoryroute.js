const express = require(`express`);


const route = express.Router();

const { addcategorypage, viewcategorypage, insertCategory, deleteUser, editUser } = require("../controller/Categorycontroller");


route.get('/addcategory', addcategorypage)
route.get('/viewcategory', viewcategorypage)
route.get('/deleteuser', deleteUser)
route.get('/edituser', editUser)


route.post('/insertcategory', insertCategory)

module.exports = route;