const express = require('express');

const route = express.Router();

const { addcategorypage, insertCategory, viewcategorypage, Changestatus, deleteUser, editUser, Updatecategory, logOut } = require('../controller/Categorycontroller');

const passport = require('passport');


// get method 
route.get('/addcategory', addcategorypage);
route.get('/viewcategory', viewcategorypage);
route.get('/changestatus', Changestatus);
route.get('/deleteuser', deleteUser);
route.get('/edituser', editUser);
route.get('/logout', logOut);


// post method 
route.post('/insertcategory', insertCategory)
route.post('/updatecategory', Updatecategory)

module.exports = route