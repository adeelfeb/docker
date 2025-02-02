const express = require("express")
const PORT = 7000

const app = express()

app.get("/", (req, res)=>{
    console.log("hi there")

    res.json({
        message:"Ok got it now somehow"
    })
})

app.listen(PORT, ()=>{
    console.log(`App running at ${PORT}`)
})