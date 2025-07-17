const express = require(`express`);

const route = express.Router();

route.use(`/`, require(`../route/authroute`))

module.exports = route;