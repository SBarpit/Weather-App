const request=require('request');

const getWeather=(lat,lng,callback)=>{
    request({
        url:`https://api.darksky.net/forecast/086283224b7537eb6b0f3671d2d8e54e/${lat},${lng}`,
        json:true
    },(error,response,body)=>{
        if(error){
        callback('Unable to connect to Forcast.io server.');
        }else if(response.statusCode===400){
            callback('Unable to fetch weather');
        }else if(response.statusCode===200){
            callback(undefined,{
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        }
    });
};
module.exports.getWeather=getWeather;