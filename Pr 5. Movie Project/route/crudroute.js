const express = require('express');

const multer = require('multer')

const routes = express.Router();

const { addpage, viewpage, editpage, insertRecord, deleteId, editId, updateRecord } = require('../controller/crudcontroller');

routes.get('/add', addpage);

routes.get('/view', viewpage);

routes.get('/edit', editpage);

routes.get('/deleteid', deleteId);

routes.get('/editid', editId);



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

routes.post('/insertrecord', imageupload, insertRecord)

routes.post('/updaterecord', imageupload, updateRecord)
module.exports = routes;