const express = require('express')

const route = express.Router();

route.use('/', require('./Authroute'));

module.exports = route