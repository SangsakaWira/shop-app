exports.getLoginPage = (req,res)=>{
    res.render("login",{
        status:false
    })
}

exports.getRegisterPage = (req,res)=>{
    res.render("register")
}

exports.getHomePage = (req,res)=>{
    res.render("home")
}

exports.getAddProductPage = (req,res)=>{
    res.render("add-product")
}

exports.getProductDetailPage = (req,res)=>{
    res.render("product-detail")
}

exports.getDeleteProductPage = (req,res)=>{
    res.render("delete-product")
}