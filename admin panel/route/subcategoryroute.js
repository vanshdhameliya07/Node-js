const express = require('express');


const route = express.Router();

const { addsubcategorypage, viewsubcategorypage, insertSubcategory, deleteUser, editUser, Updatesubcategory, logOut } = require('../controller/Subcategorycontroller');

//get method
route.get('/addsubcategory', addsubcategorypage);
route.get('/viewsubcategory', viewsubcategorypage);
route.get('/deleteuser', deleteUser);
route.get('/edituser', editUser);
route.get('/logout', logOut);

// post method 
route.post('/insertsubcategory', insertSubcategory)
route.post('/updatesubcategory', Updatesubcategory)

module.exports = route