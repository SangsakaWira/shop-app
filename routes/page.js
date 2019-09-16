const express = require("express")
const router = express.Router()
let pageController = require("../controllers/page")

// Routing halaman
router.get("/get-login-page",pageController.getLoginPage)
router.get("/get-register-page",pageController.getRegisterPage)
router.get("/get-home-page",pageController.getHomePage)
router.get("/get-add-product-page",pageController.getAddProductPage)
router.get("/get-product-detail-page",pageController.getProductDetailPage)
router.get("/get-delete-product-page",pageController.getDeleteProductPage)


module.exports = router