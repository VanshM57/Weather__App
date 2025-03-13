import apikey from "./apikey.mjs";
import apiurl from "./apiurl.mjs";

let btn = document.querySelector("button");
let input = document.querySelector("input");
const url = apiurl;
const api_key = apikey;
let cityname = document.querySelector("#city-name");
let image = document.querySelector("#image");
let tempr = document.querySelector("#temperature");
let mosam = document.querySelector("#mosam");
let humidityimage = document.querySelector("#humidity-image");
let windimage = document.querySelector("#wind-image");
let humidityname = document.querySelector("#humidity-name");
let windname = document.querySelector("#wind-name");
let humidity = document.querySelector("#humidity");
let windspeed = document.querySelector("#wind-speed");
let err = document.querySelector(".error");
let details = document.querySelector(".details");
console.log(err);
async function checkWeather(city){
    const response = await fetch(url + city + `&appid=${api_key}`);
    
    if(response.status == 404){
        details.style.display = "none";
        err.style.display = "block";
    }
    else{
        var data = await response.json();
    details.style.display = "block";
    cityname.innerHTML = data.name;
    tempr.innerHTML = Math.round(data.main.temp) + "°C";
    mosam.innerHTML = data.weather[0].main;
    console.log(data);
    if(data.weather[0].main == "Clouds"){
        image.src = "./images/clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        image.src = "./images/clear.png";
    }else if(data.weather[0].main == "Rain"){
        image.src = "./images/rain.png";
    }else if(data.weather[0].main == "Drizzle"){
        image.src = "./images/drizzle.png";
    }else if(data.weather[0].main == "Mist"){
        image.src = "./images/mist.png";
    }else if(data.weather[0].main == "Snow"){
        image.src = "./images/snow.png";
    }else if(data.weather[0].main == "Haze"){
        image.src = "./images/haze.png"
    }
    humidityimage.src = "./images/humidity.png";
    windimage.src = "./images/wind.png";
    humidityname.innerHTML = "Humidity";
    windname.innerHTML = "Wind-Speed";
    humidity.innerHTML = `${data.main.humidity}%`;
    windspeed.innerHTML = `${data.wind.speed}km/hr`;
    err.style.display = "none";
    }
    
}
btn.addEventListener("click",()=>{
    let value = input.value;
    checkWeather(value);
})