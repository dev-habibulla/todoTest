const express = require("express")

const routes = express.Router

const toDoRoute=require("./task")

routes.use("/todo",toDoRoute)



module.exports = routes