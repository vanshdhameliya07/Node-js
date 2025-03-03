const express = require('express');
const multer = require('multer')

const route = express.Router();

const { addproductpage, insertProduct, viewproductpage, deleteUser, Changestatus, edituser, Updateproduct, AjaxCategorywiseRecord } = require('../controller/Productcontroller');


route.get('/addproduct', addproductpage);
route.get('/viewproduct', viewproductpage);
route.get('/ajaxcategorywiserecord', AjaxCategorywiseRecord)
route.get('/deleteuser', deleteUser);
route.get('/changestatus', Changestatus);
route.get('/edituser', edituser);


const st = multer.diskStorage({
    destination: (req, res, cb) => {
        cb(null, 'upload')
    },
    filename: (req, file, cb) => {
        const uniq = Math.floor(Math.random() * 1000);
        cb(null, `${file.fieldname}-${uniq}`)
    }
})
const imageupload = multer({ storage: st }).single('image');


route.post('/insertproduct', imageupload, insertProduct);
route.post('/updateproduct', Updateproduct);

module.exports = route