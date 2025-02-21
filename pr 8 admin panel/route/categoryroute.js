const express = require(`express`);


const route = express.Router();

const { addcategorypage, viewcategorypage, insertCategory, deleteUser, editUser, Updatecategory, Changestatus } = require("../controller/Categorycontroller");


route.get('/addcategory', addcategorypage)
route.get('/viewcategory', viewcategorypage)
route.get('/deleteuser', deleteUser);
route.get('/edituser', editUser)
route.get('/changestatus', Changestatus)


route.post('/insertcategory', insertCategory);
route.post('/updatecategory', Updatecategory)

module.exports = route;