// const request=require('request');
const yargs=require('yargs');


const geocode=require('./geolocation/geolocation.js');
const weather=require('./weather/weather.js');

const argv=yargs
.options({
  a:{
    demand:true,
    alias:'address',
    describe:'Address to fetch weather for',
    string: true
  }
})
.help()
.alias('help','h')
.argv;

geocode.geocodeAddress(argv.address,(errorMessage,results)=>{
  if(errorMessage){
    console.log(errorMessage);
  }else{
      console.log(results.address);
      weather.getWeather(results.latitude,results.longitude,(errorMessage,weatherResults)=>{
        if(errorMessage){
          console.log(errorMessage);
        } else{
        console.log(`Its Currently : ${weatherResults.temperature}.`);
        console.log(`Feels like : ${weatherResults.apparentTemperature}`);
        }
        });
        
  }
});
//console.log(argv.a);

//086283224b7537eb6b0f3671d2d8e54e
//https://api.darksky.net/forecast/086283224b7537eb6b0f3671d2d8e54e/,