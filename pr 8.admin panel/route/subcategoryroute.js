const express = require('express');


const route = express.Router();

const { addSubcategory, insertSubcategory } = require('../controller/Subcategorycontroller');

route.get('/add_subcategory', addSubcategory);


route.post('/insertSubcategory', insertSubcategory)

module.exports = route