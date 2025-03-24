const express = require('express');

const route = express.Router();

route.use('/', require('../route/authroute'));
route.use('/product', require('../route/productroute'));

module.exports = route