const request =require("request")
const forecast =(lat,lon,callback) =>{
    const url="https://api.open-meteo.com/v1/forecast?latitude="+lat+"&longitude="+lon+"&hourly=temperature_2m";
    request.get(uri=url,(err,res)=>{
        if(err) {
            callback("Unable to connect to weather service",undefined)
        } else {
            // console.log(res.body)
            const resdata=JSON.parse(res.body)
            // console.log()
            callback(undefined,"temperature is "+resdata.hourly.temperature_2m[0] +resdata.hourly_units.temperature_2m)
        }
})
}

module.exports=forecast