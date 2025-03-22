import apikey from "./apikey.mjs";
import apiurl from "./apiurl.mjs";
import geoapikey from "./geoapikey.mjs";
import geoapiurl from "./geoapiurl.mjs";

let btn = document.querySelector("button");
let input = document.querySelector("input");
let citySuggestions = document.querySelector("#citySuggestions");
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

async function getCitySuggestions(query) {
    if (query.length < 1) return;

    const geoApiUrl = `${geoapiurl}${query}&limit=10`;
    
    try {
        const response = await fetch(geoApiUrl, {
            method: "GET",
            headers: {
                "X-RapidAPI-Key": geoapikey,
                "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com"
            }
        });

        const data = await response.json();
        citySuggestions.innerHTML = ""; // Clear previous suggestions

        if (!data.data || data.data.length === 0) return;
        
        //filtering Indian and non Indian city names
        let indianCities = data.data.filter(city => city.countryCode === "IN");
        let otherCities = data.data.filter(city => city.countryCode !== "IN");

        // Take at most 8 cities, preferring Indian ones
        let sortedCities = [...indianCities, ...otherCities].slice(0, 8);
        
        //show suggestions
        sortedCities.forEach(city => {
            let option = document.createElement("option");
            option.value = `${city.city}, ${city.countryCode}`;
            citySuggestions.appendChild(option);
        });

    } catch (error) {
        console.error("Error fetching city suggestions:", error);
    }
}


input.addEventListener("input", () => {
    getCitySuggestions(input.value);
});

btn.addEventListener("click",()=>{
    let value = input.value;
    //only take city name
    value = value.split(",")[0];
    checkWeather(value);
})

