const express = require("express")

const routes = express.Router

routes.post("/createtodo", (req, res) => {
    console.log("ami createtodo");
})



module.exports = routes