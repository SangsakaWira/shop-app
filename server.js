// Import library
const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")

const app = express()

// Mongoose
mongoose.connect("mongodb://localhost/shop-app",{
	useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology:true
})

mongoose.set('useFindAndModify', false)
mongoose.set('useCreateIndex', true)

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended:true}))

// parse application/json
app.use(bodyParser.json())

// import routes
const userRouter = require("./routes/user")
const pageRouter = require("./routes/page")

let port = process.env.PORT || 3000

app.use("/user",userRouter)
app.use("/page",pageRouter)

app.listen(port,()=>{
    console.log("Server is running!")
})