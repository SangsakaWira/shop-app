const user = require("../models/user")

exports.getAllUser = (req,res)=>{
    res.send({
        message:"Get All User"
    })   
}

exports.login = (req,res)=>{
    console.log(req.body)
    user.find({email:req.body.email,password:req.body.password},(err,doc)=>{
         if(err){
            console.log(err)
         }else{
            if(doc.length==0){
                res.render("login",{
                    status:true
                })
            }else{
                res.setHeader('Set-Cookie','loggedIn=true')
                res.redirect("/page/get-home-page")
            }
         }
    })
}

exports.register = (req,res)=>{
    res.send({
        message:"Register"
    })   
}
