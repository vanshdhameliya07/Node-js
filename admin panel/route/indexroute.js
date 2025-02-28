const express = require(`express`);

const route = express.Router();

route.use(`/`, require(`../route/authroute`));
route.use('/category', require('../route/categoryrote'));
route.use('/subcategory', require('../route/subcategoryroute'));
route.use('/exsubcategory', require('../route/exsubcategoryroute'))

module.exports = route;