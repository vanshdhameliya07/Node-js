const express = require('express');

const routes = express.Router();

routes.use('/crud', require(`./crudroute`));

module.exports = routes;