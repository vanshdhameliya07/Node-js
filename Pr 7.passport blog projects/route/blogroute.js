const express = require('express');

const multer = require('multer');

const route = express.Router();

const { addblog, blogUser, deleteUser, editblog, editUser, UpdateUser, logOut } = require('../controller/Blogcontroller')

const passport = require('passport');

route.get('/addblog', passport.checkUser, addblog);
route.get('/deleteuser', passport.checkUser, deleteUser);
route.get('/editblog', passport.checkUser, editblog);
route.get('/edituser', passport.checkUser, editUser)
route.get('/logout', passport.checkUser, logOut)

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

route.post(`/bloguser`, imageupload, blogUser);
route.post('/updateuser', imageupload, UpdateUser);

module.exports = route