const express = require(`express`);
const multer = require(`multer`);

const route = express.Router();

const { addblogpage, viewblogpage, insertRecord, deleteId, editId, editblogpage, UpdateRecord } = require(`../controller/Blogcontroller`);

route.get(`/addblog`, addblogpage);
route.get(`/viewblog`, viewblogpage);
route.get(`/deleteid`, deleteId);
route.get(`/editid`, editId);


const st = multer.diskStorage({
    destination: (req, res, cb) => {
        cb(null, `upload`);
    },
    filename: (req, file, cb) => {
        let uniq = Math.floor(Math.random() * 1000);
        cb(null, `${file.fieldname}-${uniq}`);
    }
})

const imageupload = multer({ storage: st }).single(`image`);

route.post(`/insertuser`, imageupload, insertRecord);
route.post(`/updaterecord`,UpdateRecord)

module.exports = route
