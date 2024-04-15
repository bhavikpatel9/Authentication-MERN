const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()


//middlewares
app.use(cors())
app.use(express.json())

//database connections
mongoose.connect("mongodb://localhost/Authentication")

const db = mongoose.connection

db.on("error",()=>{
    console.log("error while connecing to database")
})

db.once("open",()=>{
    console.log("succesfully connected to database")
})


//routes
require("./routes/authRoutes")(app)

//server 
const PORT = 3000
app.listen(PORT,()=>{
    console.log(`server started on ${PORT}`);
})
