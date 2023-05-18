const express = require('express')

const connectToDB = require('./config/db')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true}))

connectToDB()

const userRoutes = require("./routes/userRoutes")

app.use("/", userRoutes)

app.get("/", (req, res) => {
    res.send("<h1> Hello World Welcome To Web Server</h1>")
})

app.get("/youtube", (req, res) => {
    res.send("<h1>  Hello World Welcome To youtube</h1>")
})

app.get("/instagram", (req, res) => {
    res.json({
        success: true,  // success
        message: "Hello World   Welcome To Instagram "                 
    })
})
 module.exports =app