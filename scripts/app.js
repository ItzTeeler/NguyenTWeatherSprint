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
let currentCountry;

// GeoLoc api call
async function FetchGeoLocation(searchInputs) {
    const promise = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${searchInputs}&limit=1&appid=${apiKey}`);
    const data = await promise.json();
    latitude = data[0].lat;
    longitude = data[0].lon;
    currentStVar = data[0].state;
    currentCountry = data[0].country;
    cityName = data[0].cityName;

    currentState.innerText = StateIntoAB(currentStVar);
    FetchLocalWeather(latitude, longitude);

}

btnSearch.addEventListener("click", function (e) {
    e.preventDefault();
    FetchGeoLocation(searchInput.value);
    searchInput.value = "";
    console.log(searchInput.value);
});

// current weather call
async function FetchLocalWeather(lat, lon) {
    const promise = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`);
    const data = await promise.json();
    currentLocation.innerText = `${data.name}, `;
    currentTemp.innerText = Math.round(data.main.temp);
    currentHumid.innerText = Math.round(data.main.humidity);
    currentMax.innerText = Math.round(data.main.temp_max);
    currentMin.innerText = Math.round(data.main.temp_min);

    const word = data.weather[0].description;
    const capitalized = word.charAt(0).toUpperCase() + word.slice(1);
    weatherDescription.innerText = capitalized;

}

// 5 day forecast

async function FetchFiveDayWeather(lat, lon) {
    const promise = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`);
    const data = await promise.json();

}


//Get User location
navigator.geolocation.getCurrentPosition(success, errorFunc);


function success(position) {
    console.log("Our latitude: " + position.coords.latitude);
    console.log("Our longitude: " + position.coords.longitude);
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;

    FetchLocalWeather(latitude, longitude);
    FetchFiveDayWeather(latitude, longitude);
    ReverseGeoLocation(latitude, longitude);
};


function errorFunc(error) {
    console.log(error.message);
};

async function ReverseGeoLocation(lat, lon) {
    const promise = await fetch(`http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${apiKey}`);
    const data = await promise.json();
    currentStVar = data[0].state;
    currentState.innerText = StateIntoAB(currentStVar);
    console.log(currentStVar);
}

function StateIntoAB(state) {
    let stateAB;
    switch (state) {
        case "Alabama": stateAB = "AL"; break;
        case "Alaska": stateAB = "AK"; break;
        case "Arizona": stateAB = "AZ"; break;
        case "Arkansas": stateAB = "AR"; break;
        case "American Samoa": stateAB = "AS"; break;
        case "California": stateAB = "CA"; break;
        case "Colorado": stateAB = "CO"; break;
        case "Connecticut": stateAB = "CT"; break;
        case "Delaware": stateAB = "DE"; break;
        case "District of Columbia": stateAB = "DC"; break;
        case "Florida": stateAB = "FL"; break;
        case "Georgia": stateAB = "GA"; break;
        case "Guam": stateAB = "GU"; break;
        case "Hawaii": stateAB = "HI"; break;
        case "Idaho": stateAB = "ID"; break;
        case "Illinois": stateAB = "IL"; break;
        case "Indiana": stateAB = "IN"; break;
        case "Iowa": stateAB = "IA"; break;
        case "Kansas": stateAB = "KS"; break;
        case "Kentucky": stateAB = "KY"; break;
        case "Louisiana": stateAB = "LA"; break;
        case "Maine": stateAB = "ME"; break;
        case "Maryland": stateAB = "MD"; break;
        case "Massachusetts": stateAB = "MA"; break;
        case "Michigan": stateAB = "MI"; break;
        case "Minnesota": stateAB = "MN"; break;
        case "Mississippi": stateAB = "MS"; break;
        case "Missouri": stateAB = "MO"; break;
        case "Montana": stateAB = "MT"; break;
        case "Nebraska": stateAB = "NE"; break;
        case "Nevada": stateAB = "NV"; break;
        case "New Hampshire": stateAB = "NH"; break;
        case "New Jersey": stateAB = "NJ"; break;
        case "New Mexico": stateAB = "NM"; break;
        case "New York": stateAB = "NY"; break;
        case "North Carolina": stateAB = "NC"; break;
        case "North Dakota": stateAB = "ND"; break;
        case "Northern Mariana Islands": stateAB = "MP"; break;
        case "Ohio": stateAB = "OH"; break;
        case "Oklahoma": stateAB = "OK"; break;
        case "Oregon": stateAB = "OR"; break;
        case "Pennsylvania": stateAB = "PA"; break;
        case "Puerto Rico": stateAB = "PR"; break;
        case "Rhode Island": stateAB = "RI"; break;
        case "South Carolina": stateAB = "SC"; break;
        case "South Dakota": stateAB = "SD"; break;
        case "Tennessee": stateAB = "TN"; break;
        case "Texas": stateAB = "TX"; break;
        case "Trust Territories": stateAB = "TT"; break;
        case "Utah": stateAB = "UT"; break;
        case "Vermont": stateAB = "VT"; break;
        case "Virginia": stateAB = "VA"; break;
        case "United States Virgin Islands": stateAB = "VI"; break;
        case "Washington": stateAB = "WA"; break;
        case "West Virginia": stateAB = "WV"; break;
        case "Wisconsin": stateAB = "WI"; break;
        case "Wyoming": stateAB = "WY"; break;
        default: stateAB = currentCountry;
    }
    return stateAB;
};
