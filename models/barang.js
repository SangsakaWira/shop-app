const mongoose = require("mongoose")

let barangField = new mongoose.Schema({
    nama:String,
    foto:String,
    deskripsi:String
})
 
let barang = mongoose.model("barang",barangField)

module.exports = barang