const express = require('express');

const route = express.Router();

const { createblog, viewblog } = require('../controller/Blogcontroller');
const { verifyToken, authorise } = require('../midleware/Auth');

const multer = require('multer');

const st = multer.diskStorage({
    destination: (req, res, cb) => {
        cb(null, 'upload')
    },
    filename: (req, file, cb) => {
        const uniq = Math.floor(Math.random() * 1000);
        cb(null, `${file.fieldname}-${uniq}`)
    }
})
const imageupload = multer({ storage: st }).single('image')

route.post('/addblog', verifyToken, authorise(["admin", "user"]), imageupload, createblog)
route.get('/viewblog', viewblog)
module.exports = route