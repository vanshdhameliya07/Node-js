const express = require('express');

const route = express.Router();

route.use('/', require('../route/authroute'));
route.use('/category', require('../route/categoryroute'));
route.use('/subcategory', require('../route/subcategoryroute'))


module.exports = route;