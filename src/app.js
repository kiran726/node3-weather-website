const path=require("path")
const express=require("express")


const publicDir=path.join(__dirname,"../public");
const app=express()

app.set('view engine','hbs')
app.use(express.static(publicDir))

app.get('',(req,res)=>{
    res.render("index",{
        title:"Weather",
        uname:"Kiran"
    })
})
app.get('/help',(req,res)=>{
    res.render("help",{
        msg:"Some data"
    })
})
app.get('/about',(req,res)=>{
    res.render("about",{
        title:"About Me",
        uname:"Kiran"
    })
})
app.listen(3000,()=>{
    console.log("Server is up on port 3000")
})