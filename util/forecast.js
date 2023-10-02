const request =require("request")

const weatherDictionary = {
    0: "Clear sky",
    1: "Mainly clear, partly cloudy, and overcast",
    2: "Mainly clear, partly cloudy, and overcast",
    3: "Mainly clear, partly cloudy, and overcast",
    45: "Fog and depositing rime fog",
    48: "Fog and depositing rime fog",
    51: "Drizzle: Light intensity",
    53: "Drizzle: Moderate intensity",
    55: "Drizzle: Dense intensity",
    56: "Freezing Drizzle: Light intensity",
    57: "Freezing Drizzle: Dense intensity",
    61: "Rain: Slight intensity",
    63: "Rain: Moderate intensity",
    65: "Rain: Heavy intensity",
    66: "Freezing Rain: Light intensity",
    67: "Freezing Rain: Heavy intensity",
    71: "Snow fall: Slight intensity",
    73: "Snow fall: Moderate intensity",
    75: "Snow fall: Heavy intensity",
    77: "Snow grains",
    80: "Rain showers: Slight intensity",
    81: "Rain showers: Moderate intensity",
    82: "Rain showers: Violent intensity",
    85: "Snow showers: Slight intensity",
    86: "Snow showers: Heavy intensity",
    95: "Thunderstorm: Slight or moderate",
    96: "Thunderstorm with slight hail",
    99: "Thunderstorm with heavy hail",
  };
  

const forecast =(lat,lon,callback) =>{
    const url="https://api.open-meteo.com/v1/forecast?latitude="+lat+"&longitude="+lon+"&current_weather=true&hourly=temperature_2m";
    request.get(uri=url,(err,res)=>{
        if(err) {
            callback("Unable to connect to weather service",undefined)
        } else {
            // console.log(res.body)
            const resdata=JSON.parse(res.body)
            // console.log()
            cw=resdata.current_weather
            console.log(cw)
            console.log(resdata.hourly_units)
            const messge="The Weather outside is "+weatherDictionary[cw.weathercode]+". Temperature is "+ cw.temperature + resdata.hourly_units.temperature_2m+
            "\n and the windspeed is " + cw.windspeed + "Km/h ";
            console.log(messge)
            callback(undefined,messge)
        }
})
}

module.exports=forecast