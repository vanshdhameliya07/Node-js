const express = require('express');

const multer = require('multer');

const route = express.Router();

const { addblog, blogUser, deleteUser, editblog, editUser } = require('../controller/Blogcontroller')

route.get('/addblog', addblog);
route.get('/deleteuser', deleteUser);
route.get('/editblog', editblog);
route.get('/edituser',editUser)

const st = multer.diskStorage({
    destination: (req, res, cb) => {
        cb(null, 'upload');
    },
    filename: (req, file, cb) => {
        let uniq = Math.floor(Math.random() * 1000);
        cb(null, `${file.fieldname}-${uniq}`);
    }
})

const imageupload = multer({ storage: st }).single('image')

route.post(`/bloguser`, imageupload, blogUser)

module.exports = route