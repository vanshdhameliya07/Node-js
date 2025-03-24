const express = require('express');
const multer = require('multer');


const route = express.Router();

const { addblogpage, insertuserblog, viewblogpage, deleteuser, editid, Updaterecord } = require('../controller/Productcontroller');


route.get('/addblog', addblogpage);
route.get('/viewblog', viewblogpage);
route.get('/deleteuser', deleteuser);
route.get('/edituser', editid);

const sto = multer.diskStorage({
    destination: (req, res, cb) => {
        cb(null, 'upload');
    },
    filename: (req, file, cb) => {
        const unique = Math.floor(Math.random() * 1000);
        cb(null, `${file.fieldname}-${unique}`)
    }
})
const imageupload = multer({ storage: sto }).single('image')

route.post('/insertuserblog', imageupload, insertuserblog)
route.post('/updateuser', imageupload, Updaterecord)


module.exports = route