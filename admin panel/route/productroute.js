const express = require('express');

const route = express.Router();

const { addproductpage, insertProduct, viewproductpage, deleteUser, Changestatus, edituser, Updateproduct, AjaxCategorywiseRecord } = require('../controller/Productcontroller');

route.get('/addproduct', addproductpage);
route.get('/viewproduct', viewproductpage);
route.get('/ajaxcategorywiserecord', AjaxCategorywiseRecord)
route.get('/deleteuser', deleteUser);
route.get('/changestatus', Changestatus);
route.get('/edituser', edituser);

route.post('/insertproduct', insertProduct);
route.post('/updateproduct', Updateproduct);

module.exports = route