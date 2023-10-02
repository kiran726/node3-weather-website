const request=require("request")
const geocode = (address,callback) =>{
    const url="https://geocode.maps.co/search?q={"+address+"}&limit=1"
    request(uri=url,(err,res)=>{
        if(err){
            console.log("Unable to connect to location service")
            setTimeout(()=>{geocode(address,callback)},2000)
        } else if(res.body==="[]") {
            callback("Invalid Address",undefined)
        } else{
        const data=res.body;
        const j=JSON.parse(data)
        // console.log(j)
        callback(undefined,{
            latatiude:j[0].lat,
            longitude:j[0].lon,
            location:j[0].display_name
        })
        }
})
}

module.exports=geocode