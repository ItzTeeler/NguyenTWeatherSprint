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


// 5 Days
let dropMon = document.getElementById("dropMon");
let dropTue = document.getElementById("dropTue");
let dropWed = document.getElementById("dropWed");
let dropThu = document.getElementById("dropThu");
let dropFri = document.getElementById("dropFri");

let dropMon2 = document.getElementById("dropMon2");
let dropTue2 = document.getElementById("dropTue2");
let dropWed2 = document.getElementById("dropWed2");
let dropThu2 = document.getElementById("dropThu2");
let dropFri2 = document.getElementById("dropFri2");

// 5 Day FORECAST
let day1High = document.getElementById("day1High");
let day1Low = document.getElementById("day1Low");
let day1DescDrop = document.getElementById("day1DescDrop");
let day1TempDrop = document.getElementById("day1TempDrop");
let day1MaxDrop = document.getElementById("day1MaxDrop");
let day1MinDrop = document.getElementById("day1MinDrop");
let day1WindDrop = document.getElementById("day1WindDrop");
let day1HumidDrop = document.getElementById("day1HumidDrop");

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
    currentWind.innerText = (data.wind.speed);
    currentTemp.innerText = Math.round(data.main.temp);
    currentHumid.innerText = Math.round(data.main.humidity);
    currentMax.innerText = Math.round(data.main.temp_max);
    currentMin.innerText = Math.round(data.main.temp_min);
    WeatherIcon(data.weather[0].description);
    console.log(data.weather[0].description);
    const word = data.weather[0].description;
    const capitalized = word.charAt(0).toUpperCase() + word.slice(1);
    weatherDescription.innerText = capitalized;

}

// 5 day forecast

async function FetchFiveDayWeather(lat, lon) {
    const promise = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`);
    const data = await promise.json();
    console.log(data.list[0]);

    day1High.innerText = Math.round(data.list[0].main.temp_max);
    day1Low.innerText = Math.round(data.list[0].main.temp_min);
    day1TempDrop.innerText = Math.round(data.list[0].main.temp);
    day1MaxDrop.innerText = Math.round(data.list[0].main.temp_max);
    day1MinDrop.innerText = Math.round(data.list[0].main.temp_min);
    day1WindDrop.innerText = data.list[0].wind.speed;
    day1HumidDrop.innerText = data.list[0].main.humidity;

    const word = data.list[0].weather[0].description;
    const capitalized = word.charAt(0).toUpperCase() + word.slice(1);
    day1DescDrop.innerText = capitalized;
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
        case "Alabama":
            stateAB = "AL";
            break;
        case "Alaska":
            stateAB = "AK";
            break;
        case "Arizona":
            stateAB = "AZ";
            break;
        case "Arkansas":
            stateAB = "AR";
            break;
        case "California":
            stateAB = "CA";
            break;
        case "Colorado":
            stateAB = "CO";
            break;
        case "Connecticut":
            stateAB = "CT";
            break;
        case "Delaware":
            stateAB = "DE";
            break;
        case "District of Columbia":
            stateAB = "DC";
            break;
        case "Florida":
            stateAB = "FL";
            break;
        case "Georgia":
            stateAB = "GA";
            break;
        case "Guam":
            stateAB = "GU";
            break;
        case "Hawaii":
            stateAB = "HI";
            break;
        case "Idaho":
            stateAB = "ID";
            break;
        case "Illinois":
            stateAB = "IL";
            break;
        case "Indiana":
            stateAB = "IN";
            break;
        case "Iowa":
            stateAB = "IA";
            break;
        case "Kansas":
            stateAB = "KS";
            break;
        case "Kentucky":
            stateAB = "KY";
            break;
        case "Louisiana":
            stateAB = "LA";
            break;
        case "Maine":
            stateAB = "ME";
            break;
        case "Maryland":
            stateAB = "MD";
            break;
        case "Massachusetts":
            stateAB = "MA";
            break;
        case "Michigan":
            stateAB = "MI";
            break;
        case "Minnesota":
            stateAB = "MN";
            break;
        case "Mississippi":
            stateAB = "MS";
            break;
        case "Missouri":
            stateAB = "MO";
            break;
        case "Montana":
            stateAB = "MT";
            break;
        case "Nebraska":
            stateAB = "NE";
            break;
        case "Nevada":
            stateAB = "NV";
            break;
        case "New Hampshire":
            stateAB = "NH";
            break;
        case "New Jersey":
            stateAB = "NJ";
            break;
        case "New Mexico":
            stateAB = "NM";
            break;
        case "New York":
            stateAB = "NY";
            break;
        case "North Carolina":
            stateAB = "NC";
            break;
        case "North Dakota":
            stateAB = "ND";
            break;
        case "Ohio":
            stateAB = "OH";
            break;
        case "Oklahoma":
            stateAB = "OK";
            break;
        case "Oregon":
            stateAB = "OR";
            break;
        case "Pennsylvania":
            stateAB = "PA";
            break;
        case "Puerto Rico":
            stateAB = "PR";
            break;
        case "Rhode Island":
            stateAB = "RI";
            break;
        case "South Carolina":
            stateAB = "SC";
            break;
        case "South Dakota":
            stateAB = "SD";
            break;
        case "Tennessee":
            stateAB = "TN";
            break;
        case "Texas":
            stateAB = "TX";
            break;
        case "Utah":
            stateAB = "UT";
            break;
        case "Vermont":
            stateAB = "VT";
            break;
        case "Virginia": stateAB = "VA";
            break;
        case "Virgin Islands":
            stateAB = "VI";
            break;
        case "Washington":
            stateAB = "WA";
            break;
        case "West Virginia":
            stateAB = "WV";
            break;
        case "Wisconsin":
            stateAB = "WI";
            break;
        case "Wyoming":
            stateAB = "WY";
            break;
        default: stateAB = currentCountry;
    }
    return stateAB;
};

// Getting 5 Days
function GetDay() {
    const d = new Date();
    let day = d.getDay();
    switch (day) {
        case 0:
            dropMon.innerText = "Mon";
            dropTue.innerText = "Tue";
            dropWed.innerText = "Wed";
            dropThu.innerText = "Thu";
            dropFri.innerText = "Fri";
            dropMon2.innerText = "Mon";
            dropTue2.innerText = "Tue";
            dropWed2.innerText = "Wed";
            dropThu2.innerText = "Thu";
            dropFri2.innerText = "Fri";
            break;

        case 1:
            dropMon.innerText = "Tue";
            dropTue.innerText = "Wed";
            dropWed.innerText = "Thu";
            dropThu.innerText = "Fri";
            dropFri.innerText = "Sat";
            dropMon2.innerText = "Tue";
            dropTue2.innerText = "Wed";
            dropWed2.innerText = "Thu";
            dropThu2.innerText = "Fri";
            dropFri2.innerText = "Sat";
            break;

        case 2:
            dropMon.innerText = "Wed";
            dropTue.innerText = "Thu";
            dropWed.innerText = "Fri";
            dropThu.innerText = "Sat";
            dropFri.innerText = "Sun";
            dropMon2.innerText = "Wed";
            dropTue2.innerText = "Thu";
            dropWed2.innerText = "Fri";
            dropThu2.innerText = "Sat";
            dropFri2.innerText = "Sun";
            break;

        case 3:
            dropMon.innerText = "Thu";
            dropTue.innerText = "Fri";
            dropWed.innerText = "Sat";
            dropThu.innerText = "Sun";
            dropFri.innerText = "Mon";
            dropMon2.innerText = "Thu";
            dropTue2.innerText = "Fri";
            dropWed2.innerText = "Sat";
            dropThu2.innerText = "Sun";
            dropFri2.innerText = "Mon";
            break;

        case 4:
            dropMon.innerText = "Fri";
            dropTue.innerText = "Sat";
            dropWed.innerText = "Sun";
            dropThu.innerText = "Mon";
            dropFri.innerText = "Tue";
            dropMon2.innerText = "Fri";
            dropTue2.innerText = "Sat";
            dropWed2.innerText = "Sun";
            dropThu2.innerText = "Mon";
            dropFri2.innerText = "Tue";
            break;

        case 5:
            dropMon.innerText = "Sat";
            dropTue.innerText = "Sun";
            dropWed.innerText = "Mon";
            dropThu.innerText = "Tue";
            dropFri.innerText = "Wed";
            dropMon2.innerText = "Sat";
            dropTue2.innerText = "Sun";
            dropWed2.innerText = "Mon";
            dropThu2.innerText = "Tue";
            dropFri2.innerText = "Wed";
            break;

        case 6:
            dropMon.innerText = "Sun";
            dropTue.innerText = "Mon";
            dropWed.innerText = "Tue";
            dropThu.innerText = "Wed";
            dropFri.innerText = "Thu";
            dropMon2.innerText = "Sun";
            dropTue2.innerText = "Mon";
            dropWed2.innerText = "Tue";
            dropThu2.innerText = "Wed";
            dropFri2.innerText = "Thu";
            break;
    }

}

function WeatherIcon(weatherCondition){
    switch(weatherCondition){
        case "rain":
            currentWeatherIcon.src = "./assets/Rainy.png";
        break;
        case "clear sky":
            currentWeatherIcon.src = "./assets/SunnySmall.png";
        break;
        case "few clouds":
            currentWeatherIcon.src = "./assets/SunCloud.png";
        break;
        case "scattered clouds":
            currentWeatherIcon.src = "./assets/SunCloud.png";
        break;
        case "broken clouds":
            currentWeatherIcon.src = "./assets/SunCloud.png";
        break;
        case "shower rain":
            currentWeatherIcon.src = "./assets/Rainy.png";
        break;
        case "thunderstorm":
            currentWeatherIcon.src = "./assets/Rainy.png";
        break;
        case "snow":
            currentWeatherIcon.src = "./assets/Rainy.png";
        break;
        case "mist":
            currentWeatherIcon.src = "./assets/SunCloud.png";
        break;
        case "light rain":
            currentWeatherIcon.src = "./assets/Rainy.png";
        break;
        default: currentWeatherIcon.src = "./assets/SunnySmall.png";
    }
}
GetDay();

