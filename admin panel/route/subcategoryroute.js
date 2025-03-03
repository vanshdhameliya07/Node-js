const express = require('express');

const route = express.Router();

const { addsubcategorypage, viewsubcategorypage, insertSubcategory, deleteUser, editUser, Updatesubcategory, logOut, Changestatus } = require('../controller/Subcategorycontroller');

const passport = require('passport');


//get method
route.get('/addsubcategory', addsubcategorypage);
route.get('/viewsubcategory', viewsubcategorypage);
route.get('/changestatus', Changestatus)
route.get('/deleteuser', deleteUser);
route.get('/edituser', editUser);
route.get('/logout', logOut);

// post method 
route.post('/insertsubcategory', insertSubcategory)
route.post('/updatesubcategory', Updatesubcategory)

module.exports = route