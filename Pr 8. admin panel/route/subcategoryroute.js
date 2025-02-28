const express = require('express');


const route = express.Router();

const { addSubcategory, insertSubcategory, viewSubcategory, deleteUser, editUser, Updatesubcategory } = require('../controller/Subcategorycontroller');

route.get('/add_subcategory', addSubcategory);
route.get('/view_subcategory', viewSubcategory);
route.get('/deleteuser', deleteUser);
route.get('/edituser', editUser);


route.post('/insertSubcategory', insertSubcategory)
route.post('/updatesubcategory', Updatesubcategory)

module.exports = route