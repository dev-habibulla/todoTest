const express = require("express");
const routes = express.Router();

const todo =require("./api")

const baseUrl = "/api/v1"

routes.use(baseUrl,todo)



module.exports = routes