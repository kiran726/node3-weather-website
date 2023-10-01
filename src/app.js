const path=require("path")
const express=require("express")
const hbs=require("hbs")


const app=express()

// #Define path for express config
const publicDir=path.join(__dirname,"../public");
const viewPath=path.join(__dirname,'../templates/views')
const partialPath=path.join(__dirname,'../templates/partials')

//setup handlebars engine
app.set('view engine','hbs')
app.set('views',viewPath)
hbs.registerPartials(partialPath)

app.use(express.static(publicDir))

app.get('',(req,res)=>{
    res.render("index",{
        title:"Weather",
        uname:"Kiran"
    })
})
app.get('/help',(req,res)=>{
    res.render("help",{
        title:"Weather",
        msg:"Some data",
        uname:"Kiran"
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