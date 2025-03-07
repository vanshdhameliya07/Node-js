const express = require('express');

const multer = require('multer');

const route = express.Router();

const { addproductpage, insertProduct, viewproductpage, deleteUser, Changestatus, edituser, Updateproduct, AjaxCategorywiseRecord } = require('../controller/Productcontroller');

const passport = require('passport')

const sto = multer.diskStorage({
    destination: (req, res, cb) => {
        cb(null, 'upload')
    },
    filename: (req, file, cb) => {
        const uniq = Math.floor(Math.random() * 1000);
        cb(null, `${file.fieldname}-${uniq}`)
    }
})
const imageupload = multer({ storage: sto }).single('image')

route.get('/addproduct', passport.checkUser, addproductpage);
route.get('/viewproduct', passport.checkUser, viewproductpage);
route.get('/ajaxcategorywiserecord', AjaxCategorywiseRecord)
route.get('/deleteuser', deleteUser);
route.get('/changestatus', Changestatus);
route.get('/edituser', edituser);


route.post('/insertproduct', imageupload, insertProduct);
route.post('/updateproduct', imageupload, Updateproduct);

module.exports = route