const express = require('express');

const routes = express.Router();

const { addpage, viewpage, editpage, insertRecord, deleteId, editId, updateRecord } = require('../controller/crudcontroller');

routes.get('/add', addpage);

routes.get('/view', viewpage);

routes.get('/edit', editpage)

routes.post('/insertrecord', insertRecord)

routes.get('/deleteid', deleteId);

routes.get('/editid', editId);

routes.post('/updaterecord', updateRecord)

module.exports = routes;