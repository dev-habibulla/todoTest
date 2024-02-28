require('dotenv').config()
const express = require("express")
const app = express()
const mongoose = require('mongoose');
const todoSchema = require("./model/todoSchema");
const secureApi = require('./middleware/secureApi');

//const routes=require("./routes")

// app.use(routes)

mongoose.connect(`mongodb+srv://${process.env.DB_USER_NAME}:${process.env.DB_PASSWORD}@cluster0.hyck63b.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`)
    .then(() => console.log("Mongodb Connected!"));

// app.use(express.json())

// app.post("/api/v1/todo/createtodo", (req, res) => {
//     const { name } = req.body
//     let task = new todoSchema({
//         name: name
//     })

//     task.save()
//     res.send(task)

// })

// app.get("/api/v1/todo/alltodo", secureApi, async (req, res) => {
//     // const data = await todoSchema.find()
//     // res.send(data)
//     console.log("kira get");
// })




app.listen(8000, () => {
    console.log("port connect");
})