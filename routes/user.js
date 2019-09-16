const express = require("express")
const router = express.Router()
let userController = require("../controllers/user")

router.get("/getAllUser",userController.getAllUser)
router.post("/login",userController.login)
router.post("/register",userController.register)

module.exports = router