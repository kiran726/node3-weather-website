const path=require("path")
const express=require("express")
const hbs=require("hbs")
const forecast=require("../util/forecast")
const geocode=require("../util/geocode")

const app=express()
const port=process.env.PORT || 3000
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
        msg:"Search the location to get a simple weather report using geocode and open-metro api's",
        uname:"Kiran"
    })
})
app.get('/about',(req,res)=>{
    res.render("about",{
        title:"About Me",
        msg:"Nothing to say",
        uname:"Kiran"
    })
})

app.get('/weather',(req,res)=>{
    if(!req.query.address){
        return res.send({
            error:"Wrong address provided, try another"
        })
    }
    const msg=geocode(req.query.address,(error,{latatiude,longitude,location}={})=>{
        if(error){
            return res.send({error})
        }

        forecast(latatiude,longitude,(error,forecastMsg)=>{
            if(error){
                return res.send({error})
            }
            
            res.send({
                forecast:forecastMsg,
                location,
                address:req.query.address
            })
        })
    })
    
})

app.get('/help/*',(req,res)=>{
    res.render('404',{
        title:"Weather",
        uname:"Kiran",
        msg:"Help article not found"
    })
})
app.get('*',(req,res)=>{
    res.render('404',{
        title:"Weather",
        uname:"Kiran",
        msg:"404 Page Not Found"
    })
})

app.listen(port,()=>{
    console.log("Server is up on port "+port)
})