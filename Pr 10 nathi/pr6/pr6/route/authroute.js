const express = require(`express`);
const multer = require(`multer`)

const route = express.Router();

const { CheckUser } = require("../middleware/CheckUser");
const { registerpage, registerUser, loginpage, loginUser, blogpage, logoutUser, blogUser, viewpage, deleteUser, editUser, updateRecord } = require(`../controller/Authcontroller`);


//  get method 
route.get(`/register`, registerpage);
route.get(`/login`, loginpage);
route.get(`/blog`, blogpage);
route.get(`/logoutuser`, logoutUser);
route.get(`/view`, viewpage);
route.get(`/deleteuser`, deleteUser);
route.get(`/edituser`, editUser)

const st = multer.diskStorage({
    destination: (req, res, cb) => {
        cb(null, 'upload')
    },
    filename: (req, file, cb) => {
        const uniq = Math.floor(Math.random() * 1000);
        cb(null, `${file.fieldname}-${uniq}`)
    }
})

const imageUpload = multer({ storage: st }).single(`image`)

// post method 
route.post(`/registeruser`, registerUser);
route.post(`/loginuser`, loginUser);
route.post(`/bloguser`, imageUpload, blogUser);
route.post(`/updaterecord`, updateRecord)

module.exports = route