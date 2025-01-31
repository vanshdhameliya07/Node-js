const express = require(`express`);

const route = express.Router();

const { addpage, viewpage } = require('../controller/crudcontroller')

route.get('/', addpage);

route.get('/view', viewpage);

module.exports = route;