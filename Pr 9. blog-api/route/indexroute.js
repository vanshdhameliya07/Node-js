const express = require('express');

const route = express.Router();

route.use('/', require('../route/authroute'));
route.use('/blog', require('../route/blogroute'))

module.exports = route