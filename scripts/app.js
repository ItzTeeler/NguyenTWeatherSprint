import { apiKey } from "./enviroment.js";

// Search Bar

let btnSearch = document.getElementById("btnSearch");
let searchInput = document.getElementById("searchInput");

// End of search

// Current Weather
let currentTemp = document.getElementById("currentTemp");
let weatherDescription = document.getElementById("weatherDescription");
let currentLocation = document.getElementById("currentLocation");
let currentState = document.getElementById("currentState");
let currentMax = document.getElementById("currentMax");
let currentMin = document.getElementById("currentMin");
let currentWind = document.getElementById("currentWind");
let currentHumid = document.getElementById("currentHumid");
let currentWeatherIcon = document.getElementById("currentWeatherIcon");


let cityName;
let latitude;
let longitude;
let currentStVar;


// GeoLoc api call
async function fetchGeoLocation(searchInput){
    const promise = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${searchInput}&limit=1&appid=${apiKey}`);
    const data = await promise.json();
    cityName = data[0].name;
    latitude = data[0].lat;
    longitude = data[0].lon;
    currentStVar = data[0].state;

    fetchLocalWeather(latitude, longitude);
    console.log(cityName)
}

btnSearch.addEventListener("click", function(){
    fetchGeoLocation(searchInput.value);
});

// current weather call
async function fetchLocalWeather(lat, lon){
    const promise = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`);
    const data = await promise.json();
    currentLocation.innerText = `${data.name}, `;
    currentTemp.innerText = Math.round(data.main.temp);
    currentHumid.innerText = Math.round(data.main.humidity);
    currentMax.innerText = Math.round(data.main.temp_max);
    currentMin.innerText = Math.round(data.main.temp_min);

    const word = data.weather[0].description;
    const capitalized = word.charAt(0).toUpperCase() + word.slice(1)
    weatherDescription.innerText = capitalized;

    console.log(cityName);
}

// Get User location
navigator.geolocation.getCurrentPosition(success, errorFunc);


function success(position){
    console.log("Our latitude: " + position.coords.latitude);
    console.log("Our longitude: " + position.coords.longitude);
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
    fetchLocalWeather(latitude, longitude);
};


function errorFunc(error){
    console.log(error.message);
};
