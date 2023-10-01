const path=require("path")
const express=require("express")


const publicDir=path.join(__dirname,"../public");
const app=express()
app.use(express.static(publicDir))

app.listen(3000,()=>{
    console.log("Server is up on port 3000")
})