const mongoose = require("mongoose")

let userField = new mongoose.Schema({
    username:String,
    email:String,
    password:String
})

let user = mongoose.model("user",userField)

module.exports = user