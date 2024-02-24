const mongoose = require("mongoose");
const { Schema } = mongoose;

const todoSchema = new Schema({
    name: String
});

module.exports = mongoose.model("Todo", todoSchema);