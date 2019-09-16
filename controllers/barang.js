const barang = require("../models/barang")

exports.getAllBarang = (req,res) =>{
    barang.find((err,doc)=>{
        if(err){
            res.send({
                message:err
            })
        }else{
            res.send(doc)
        }
    })
}

exports.addBarang = (req,res) =>{
    barang.create(req.body,(err,doc)=>{
        if(err){
            res.send({
                message:err
            })
        }else{
            res.send(doc)
        }
    })
}

exports.getBarangById = (req,res) =>{
    barang.findById(req.params.id,(err,doc)=>{
        if(err){
            res.send({
                message:err
            })
        }else{
            res.send(doc)
        }
    })
}