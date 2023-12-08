import { apiKey } from "./enviroment.js";

// Search Bar

let btnSearch = document.getElementById("btnSearch");
let searchInput = document.getElementById("searchInput");

// End of search

// Favorite
let favoriteBtn = document.getElementById("favoriteBtn");

let nonFavBtn = document.getElementById("nonFavBtn");

let searchFavBtn = document.getElementById("searchFavBtn");

let insertHere = document.getElementById("insertHere");

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
// Day 1
let day1High = document.getElementById("day1High");
let day1Low = document.getElementById("day1Low");
let day1DescDrop = document.getElementById("day1DescDrop");
let day1TempDrop = document.getElementById("day1TempDrop");
let day1MaxDrop = document.getElementById("day1MaxDrop");
let day1MinDrop = document.getElementById("day1MinDrop");
let day1WindDrop = document.getElementById("day1WindDrop");
let day1HumidDrop = document.getElementById("day1HumidDrop");

let day1WeatherIcon = document.getElementById("day1WeatherIcon");
let day1WeatherIconDrop = document.getElementById("day1WeatherIconDrop")
// Day 2
let day2High = document.getElementById("day2High");
let day2Low = document.getElementById("day2Low");
let day2DescDrop = document.getElementById("day2DescDrop");
let day2TempDrop = document.getElementById("day2TempDrop");
let day2MaxDrop = document.getElementById("day2MaxDrop");
let day2MinDrop = document.getElementById("day2MinDrop");
let day2WindDrop = document.getElementById("day2WindDrop");
let day2HumidDrop = document.getElementById("day2HumidDrop");

let day2WeatherIcon = document.getElementById("day2WeatherIcon");
let day2WeatherIconDrop = document.getElementById("day2WeatherIconDrop")
// Day 3
let day3High = document.getElementById("day3High");
let day3Low = document.getElementById("day3Low");
let day3DescDrop = document.getElementById("day3DescDrop");
let day3TempDrop = document.getElementById("day3TempDrop");
let day3MaxDrop = document.getElementById("day3MaxDrop");
let day3MinDrop = document.getElementById("day3MinDrop");
let day3WindDrop = document.getElementById("day3WindDrop");
let day3HumidDrop = document.getElementById("day3HumidDrop");

let day3WeatherIcon = document.getElementById("day3WeatherIcon");
let day3WeatherIconDrop = document.getElementById("day3WeatherIconDrop")
// Day 4

let day4High = document.getElementById("day4High");
let day4Low = document.getElementById("day4Low");
let day4DescDrop = document.getElementById("day4DescDrop");
let day4TempDrop = document.getElementById("day4TempDrop");
let day4MaxDrop = document.getElementById("day4MaxDrop");
let day4MinDrop = document.getElementById("day4MinDrop");
let day4WindDrop = document.getElementById("day4WindDrop");
let day4HumidDrop = document.getElementById("day4HumidDrop");

let day4WeatherIcon = document.getElementById("day4WeatherIcon");
let day4WeatherIconDrop = document.getElementById("day4WeatherIconDrop")
// Day 5

let day5High = document.getElementById("day5High");
let day5Low = document.getElementById("day5Low");
let day5DescDrop = document.getElementById("day5DescDrop");
let day5TempDrop = document.getElementById("day5TempDrop");
let day5MaxDrop = document.getElementById("day5MaxDrop");
let day5MinDrop = document.getElementById("day5MinDrop");
let day5WindDrop = document.getElementById("day5WindDrop");
let day5HumidDrop = document.getElementById("day5HumidDrop");

let day5WeatherIcon = document.getElementById("day5WeatherIcon");
let day5WeatherIconDrop = document.getElementById("day5WeatherIconDrop")

let cityName;
let latitude;
let longitude;
let currentStVar;
let currentCountry;

let units = "&units=imperial";

let turnToCelc = document.getElementById("turnToCelc");
let turnToFeh = document.getElementById("turnToFeh");

let change1Unit = document.getElementById("change1Unit");
let change2Unit = document.getElementById("change2Unit");
let change3Unit = document.getElementById("change3Unit");
let change4Unit = document.getElementById("change4Unit");
let change5Unit = document.getElementById("change5Unit");
let change6Unit = document.getElementById("change6Unit");
let change7Unit = document.getElementById("change7Unit");
let change8Unit = document.getElementById("change8Unit");
let change9Unit = document.getElementById("change9Unit");
let change10Unit = document.getElementById("change10Unit");
let change11Unit = document.getElementById("change11Unit");
let change12Unit = document.getElementById("change12Unit");

let changeF1 = document.getElementById("changeF1");
let changeC1 = document.getElementById("changeC1");
let changeF2 = document.getElementById("changeF2");
let changeC2 = document.getElementById("changeC2");
let changeF3 = document.getElementById("changeF3");
let changeC3 = document.getElementById("changeC3");
let changeF4 = document.getElementById("changeF4");
let changeC4 = document.getElementById("changeC4");


// GeoLoc api call
async function FetchGeoLocation(searchInputs) {
    const promise = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchInputs}&appid=${apiKey}`);
    const data = await promise.json();
    console.log(data);
    latitude = data.coord.lat;
    longitude = data.coord.lon;
    // currentStVar = data[0].state;
    // currentCountry = data[0].country;
    // cityName = data.name;

    currentState.innerText = StateIntoAB(currentStVar);
    FetchLocalWeather(latitude, longitude);
    GetHighnLow(latitude, longitude);
    ReverseGeoLocation(latitude, longitude);

}

btnSearch.addEventListener("click", function (e) {
    e.preventDefault();
    FetchGeoLocation(searchInput.value);
    searchInput.value = "";
    console.log(searchInput.value);
});

// current weather call
async function FetchLocalWeather(lat, lon) {
    const promise = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}${units}`);
    const data = await promise.json();
    cityName = data.name
    currentLocation.innerText = `${data.name}, `;
    currentWind.innerText = (data.wind.speed);
    currentTemp.innerText = Math.round(data.main.temp);
    currentHumid.innerText = Math.round(data.main.humidity);
    currentMax.innerText = Math.round(data.main.temp_max);
    currentMin.innerText = Math.round(data.main.temp_min);
    WeatherIcon(data.weather[0].description);
    console.log(data.weather[0].description);
    const word = data.weather[0].description;
    const capitalize = word.charAt(0).toUpperCase() + word.slice(1);
    weatherDescription.innerText = capitalize;

}

// 5 day forecast

async function FetchFiveDayWeather(lat, lon) {
    const promise = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}${units}`);
    const data = await promise.json();
    console.log(data.list[0]);

    // Day 1
    day1WindDrop.innerText = data.list[0].wind.speed;
    day1HumidDrop.innerText = data.list[0].main.humidity;
    WeatherIconForecast1(data.list[0].weather[0].description);


    const word = data.list[0].weather[0].description;
    const capitalize = word.charAt(0).toUpperCase() + word.slice(1);
    day1DescDrop.innerText = capitalize;

    // Day 2
    day2WindDrop.innerText = data.list[8].wind.speed;
    day2HumidDrop.innerText = data.list[8].main.humidity;
    WeatherIconForecast2(data.list[8].weather[0].description);

    const word2 = data.list[8].weather[0].description;
    const capitalize2 = word2.charAt(0).toUpperCase() + word2.slice(1);
    day2DescDrop.innerText = capitalize2;

    // Day 3
    day3WindDrop.innerText = data.list[16].wind.speed;
    day3HumidDrop.innerText = data.list[16].main.humidity;
    WeatherIconForecast3(data.list[16].weather[0].description);

    const word3 = data.list[16].weather[0].description;
    const capitalize3 = word3.charAt(0).toUpperCase() + word3.slice(1);
    day3DescDrop.innerText = capitalize3;

    // Day 4
    day4WindDrop.innerText = data.list[24].wind.speed;
    day4HumidDrop.innerText = data.list[24].main.humidity;
    WeatherIconForecast4(data.list[24].weather[0].description);

    const word4 = data.list[24].weather[0].description;
    const capitalize6 = word4.charAt(0).toUpperCase() + word4.slice(1);
    day4DescDrop.innerText = capitalize6;

    // Day 5
    day5WindDrop.innerText = data.list[32].wind.speed;
    day5HumidDrop.innerText = data.list[32].main.humidity;
    WeatherIconForecast5(data.list[32].weather[0].description);

    const word5 = data.list[32].weather[0].description;
    const capitalize5 = word5.charAt(0).toUpperCase() + word5.slice(1);
    day5DescDrop.innerText = capitalize5;
}

async function GetHighnLow(lat, lon) {
    const promise = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}${units}`);
    const data = await promise.json();

    const forecastData = [];

    for (let i = 0; i < data.list.length; i += 8) {
        let highestTemp = data.list[i].main.temp_max;
        let lowestTemp = data.list[i].main.temp_min;

        for (let j = i + 1; j < i + 8; j++) {
            const item = data.list[j];
            highestTemp = Math.max(highestTemp, item.main.temp_max);
            lowestTemp = Math.min(lowestTemp, item.main.temp_min);
        }

        forecastData.push({
            highestTemp: Math.round(highestTemp),
            lowestTemp: Math.round(lowestTemp),
        });
    }

    // Day 1
    day1High.innerText = forecastData[0].highestTemp;
    day1Low.innerText = forecastData[0].lowestTemp;
    day1TempDrop.innerText = forecastData[0].highestTemp;
    day1MaxDrop.innerText = forecastData[0].highestTemp;
    day1MinDrop.innerText = forecastData[0].lowestTemp;

    // Day 2
    day2High.innerText = forecastData[1].highestTemp;
    day2Low.innerText = forecastData[1].lowestTemp;
    day2TempDrop.innerText = forecastData[1].highestTemp;
    day2MaxDrop.innerText = forecastData[1].highestTemp;
    day2MinDrop.innerText = forecastData[1].lowestTemp;

    // Day 3
    day3High.innerText = forecastData[2].highestTemp;
    day3Low.innerText = forecastData[2].lowestTemp;
    day3TempDrop.innerText = forecastData[2].highestTemp;
    day3MaxDrop.innerText = forecastData[2].highestTemp;
    day3MinDrop.innerText = forecastData[2].lowestTemp;

    // Day 4
    day4High.innerText = forecastData[3].highestTemp;
    day4Low.innerText = forecastData[3].lowestTemp;
    day4TempDrop.innerText = forecastData[3].highestTemp;
    day4MaxDrop.innerText = forecastData[3].highestTemp;
    day4MinDrop.innerText = forecastData[3].lowestTemp;

    // Day 5
    day5High.innerText = forecastData[4].highestTemp;
    day5Low.innerText = forecastData[4].lowestTemp;
    day5TempDrop.innerText = forecastData[4].highestTemp;
    day5MaxDrop.innerText = forecastData[4].highestTemp;
    day5MinDrop.innerText = forecastData[4].lowestTemp;

    console.log(forecastData);
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
    GetHighnLow(latitude, longitude)
};


function errorFunc(error) {
    console.log(error.message);
};

async function ReverseGeoLocation(lat, lon) {
    const promise = await fetch(`http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${apiKey}`);
    const data = await promise.json();
    console.log(data)

    currentCountry = data[0].country;
    currentStVar = data[0].state;
    currentState.innerText = StateIntoAB(currentCountry);
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

function WeatherIcon(weatherCondition) {
    switch (weatherCondition) {
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
        case "smoke":
            currentWeatherIcon.src = "./assets/SunCloud.png";
            break;
        case "haze":
            currentWeatherIcon.src = "./assets/SunCloud.png";
            break;
        case "sand/dusk whirls":
            currentWeatherIcon.src = "./assets/SunCloud.png";
            break;
        case "fog":
            currentWeatherIcon.src = "./assets/SunCloud.png";
            break;
        case "sand":
            currentWeatherIcon.src = "./assets/SunCloud.png";
            break;
        case "volcanic ash":
            currentWeatherIcon.src = "./assets/SunCloud.png";
            break;
        case "squalls":
            currentWeatherIcon.src = "./assets/SunCloud.png";
            break;
        case "tornado":
            currentWeatherIcon.src = "./assets/SunCloud.png";
            break;
        case "overcast clouds":
            currentWeatherIcon.src = "./assets/SunCloud.png";
            break;
        case "light snow":
            currentWeatherIcon.src = "./assets/Rainy.png";
            break;
        case "heavy snow":
            currentWeatherIcon.src = "./assets/Rainy.png";
            break;
        case "sleet":
            currentWeatherIcon.src = "./assets/Rainy.png";
            break;
        case "light shower sleet":
            currentWeatherIcon.src = "./assets/Rainy.png";
            break;
        case "shower sleet":
            currentWeatherIcon.src = "./assets/Rainy.png";
            break;
        case "light rain and snow":
            currentWeatherIcon.src = "./assets/Rainy.png";
            break;
        case "rain and snow":
            currentWeatherIcon.src = "./assets/Rainy.png";
            break;
        case "light shower snow":
            currentWeatherIcon.src = "./assets/Rainy.png";
            break;
        case "shower snow":
            currentWeatherIcon.src = "./assets/Rainy.png";
            break;
        case "heavy shower snow":
            currentWeatherIcon.src = "./assets/Rainy.png";
            break;
        case "moderate rain":
            currentWeatherIcon.src = "./assets/Rainy.png";
            break;
        case "heavy intensity rain":
            currentWeatherIcon.src = "./assets/Rainy.png";
            break;
        case "very heavy rain":
            currentWeatherIcon.src = "./assets/Rainy.png";
            break;
        case "extreme rain":
            currentWeatherIcon.src = "./assets/Rainy.png";
            break;
        case "freezing rain":
            currentWeatherIcon.src = "./assets/Rainy.png";
            break;
        case "light intensity shower rain":
            currentWeatherIcon.src = "./assets/Rainy.png";
            break;
        case "shower rain":
            currentWeatherIcon.src = "./assets/Rainy.png";
            break;
        case "heavy intensity shower rain":
            currentWeatherIcon.src = "./assets/Rainy.png";
            break;
        case "ragged shower rain":
            currentWeatherIcon.src = "./assets/Rainy.png";
            break;
        case "light intensity drizzle":
            currentWeatherIcon.src = "./assets/Rainy.png";
            break;
        case "dizzle":
            currentWeatherIcon.src = "./assets/Rainy.png";
            break;
        case "heavy intensity drizzle":
            currentWeatherIcon.src = "./assets/Rainy.png";
            break;
        case "light intensity drizzle rain":
            currentWeatherIcon.src = "./assets/Rainy.png";
            break;
        case "drizzle rain":
            currentWeatherIcon.src = "./assets/Rainy.png";
            break;
        case "heavy intensity drizzle rain":
            currentWeatherIcon.src = "./assets/Rainy.png";
            break;
        case "shower rain and drizzle":
            currentWeatherIcon.src = "./assets/Rainy.png";
            break;
        case "heavy shower rain and drizzle":
            currentWeatherIcon.src = "./assets/Rainy.png";
            break;
        case "shower drizzle":
            currentWeatherIcon.src = "./assets/Rainy.png";
            break;
        case "thunderstorm with light rain":
            currentWeatherIcon.src = "./assets/Rainy.png";
            break;
        case "thunderstorm with rain":
            currentWeatherIcon.src = "./assets/Rainy.png";
            break;
        case "thunderstorm with heavy rain":
            currentWeatherIcon.src = "./assets/Rainy.png";
            break;
        case "light thunderstorm":
            currentWeatherIcon.src = "./assets/Rainy.png";
            break;
        case "heavy thunderstorm":
            currentWeatherIcon.src = "./assets/Rainy.png";
            break;
        case "ragged thunderstorm":
            currentWeatherIcon.src = "./assets/Rainy.png";
            break;
        case "thunderstorm with light drizzle":
            currentWeatherIcon.src = "./assets/Rainy.png";
            break;
        case "thunderstorm with drizzle":
            currentWeatherIcon.src = "./assets/Rainy.png";
            break;
        case "thunderstorm with heavy drizzle":
            currentWeatherIcon.src = "./assets/Rainy.png";
            break;
        default: currentWeatherIcon.src = "./assets/SunnySmall.png";
    }
}
function WeatherIconForecast1(weatherCondition) {
    switch (weatherCondition) {
        case "rain":
            day1WeatherIcon.src = "./assets/Rainy.png";
            day1WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "clear sky":
            day1WeatherIcon.src = "./assets/SunnySmall.png";
            day1WeatherIconDrop.src = "./assets/SunnySmall.png";
            break;
        case "few clouds":
            day1WeatherIcon.src = "./assets/SunCloud.png";
            day1WeatherIconDrop.src = "./assets/SunCloud.png";
            break;
        case "scattered clouds":
            day1WeatherIcon.src = "./assets/SunCloud.png";
            day1WeatherIconDrop.src = "./assets/SunCloud.png";
            break;
        case "broken clouds":
            day1WeatherIcon.src = "./assets/SunCloud.png";
            day1WeatherIconDrop.src = "./assets/SunCloud.png";
            break;
        case "shower rain":
            day1WeatherIcon.src = "./assets/Rainy.png";
            day1WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "thunderstorm":
            day1WeatherIcon.src = "./assets/Rainy.png";
            day1WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "snow":
            day1WeatherIcon.src = "./assets/Rainy.png";
            day1WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "mist":
            day1WeatherIcon.src = "./assets/SunCloud.png";
            day1WeatherIconDrop.src = "./assets/SunCloud.png";
            break;
        case "light rain":
            day1WeatherIcon.src = "./assets/Rainy.png";
            day1WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "smoke":
            day1WeatherIcon.src = "./assets/SunCloud.png";
            day1WeatherIconDrop.src = "./assets/SunCloud.png";
            break;
        case "haze":
            day1WeatherIcon.src = "./assets/SunCloud.png";
            day1WeatherIconDrop.src = "./assets/SunCloud.png";
            break;
        case "sand/dusk whirls":
            day1WeatherIcon.src = "./assets/SunCloud.png";
            day1WeatherIconDrop.src = "./assets/SunCloud.png";
            break;
        case "fog":
            day1WeatherIcon.src = "./assets/SunCloud.png";
            day1WeatherIconDrop.src = "./assets/SunCloud.png";
            break;
        case "sand":
            day1WeatherIcon.src = "./assets/SunCloud.png";
            day1WeatherIconDrop.src = "./assets/SunCloud.png";
            break;
        case "volcanic ash":
            day1WeatherIcon.src = "./assets/SunCloud.png";
            day1WeatherIconDrop.src = "./assets/SunCloud.png";
            break;
        case "squalls":
            day1WeatherIcon.src = "./assets/SunCloud.png";
            day1WeatherIconDrop.src = "./assets/SunCloud.png";
            break;
        case "tornado":
            day1WeatherIcon.src = "./assets/SunCloud.png";
            day1WeatherIconDrop.src = "./assets/SunCloud.png";
            break;
        case "overcast clouds":
            day1WeatherIcon.src = "./assets/SunCloud.png";
            day1WeatherIconDrop.src = "./assets/SunCloud.png";
            break;
        case "light snow":
            day1WeatherIcon.src = "./assets/Rainy.png";
            day1WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "heavy snow":
            day1WeatherIcon.src = "./assets/Rainy.png";
            day1WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "sleet":
            day1WeatherIcon.src = "./assets/Rainy.png";
            day1WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "light shower sleet":
            day1WeatherIcon.src = "./assets/Rainy.png";
            day1WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "shower sleet":
            day1WeatherIcon.src = "./assets/Rainy.png";
            day1WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "light rain and snow":
            day1WeatherIcon.src = "./assets/Rainy.png";
            day1WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "rain and snow":
            day1WeatherIcon.src = "./assets/Rainy.png";
            day1WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "light shower snow":
            day1WeatherIcon.src = "./assets/Rainy.png";
            day1WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "shower snow":
            day1WeatherIcon.src = "./assets/Rainy.png";
            day1WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "heavy shower snow":
            day1WeatherIcon.src = "./assets/Rainy.png";
            day1WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "light intensity drizzle":
            day1WeatherIcon.src = "./assets/Rainy.png";
            day1WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "dizzle":
            day1WeatherIcon.src = "./assets/Rainy.png";
            day1WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "heavy intensity drizzle":
            day1WeatherIcon.src = "./assets/Rainy.png";
            day1WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "light intensity drizzle rain":
            day1WeatherIcon.src = "./assets/Rainy.png";
            day1WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "drizzle rain":
            day1WeatherIcon.src = "./assets/Rainy.png";
            day1WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "heavy intensity drizzle rain":
            day1WeatherIcon.src = "./assets/Rainy.png";
            day1WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "shower rain and drizzle":
            day1WeatherIcon.src = "./assets/Rainy.png";
            day1WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "heavy shower rain and drizzle":
            day1WeatherIcon.src = "./assets/Rainy.png";
            day1WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "shower drizzle":
            day1WeatherIcon.src = "./assets/Rainy.png";
            day1WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "thunderstorm with light rain":
            day1WeatherIcon.src = "./assets/Rainy.png";
            day1WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "thunderstorm with rain":
            day1WeatherIcon.src = "./assets/Rainy.png";
            day1WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "thunderstorm with heavy rain":
            day1WeatherIcon.src = "./assets/Rainy.png";
            day1WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "light thunderstorm":
            day1WeatherIcon.src = "./assets/Rainy.png";
            day1WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "heavy thunderstorm":
            day1WeatherIcon.src = "./assets/Rainy.png";
            day1WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "ragged thunderstorm":
            day1WeatherIcon.src = "./assets/Rainy.png";
            day1WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "thunderstorm with light drizzle":
            day1WeatherIcon.src = "./assets/Rainy.png";
            day1WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "thunderstorm with drizzle":
            day1WeatherIcon.src = "./assets/Rainy.png";
            day1WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "thunderstorm with heavy drizzle":
            day1WeatherIcon.src = "./assets/Rainy.png";
            day1WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        default:
            day1WeatherIcon.src = "./assets/SunnySmall.png";
            day1WeatherIconDrop.src = "./assets/SunnySmall.png";
    }
}

function WeatherIconForecast2(weatherCondition) {
    switch (weatherCondition) {
        case "rain":
            day2WeatherIcon.src = "./assets/Rainy.png";
            day2WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "clear sky":
            day2WeatherIcon.src = "./assets/SunnySmall.png";
            day2WeatherIconDrop.src = "./assets/SunnySmall.png";
            break;
        case "few clouds":
            day2WeatherIcon.src = "./assets/SunCloud.png";
            day2WeatherIconDrop.src = "./assets/SunCloud.png";
            break;
        case "scattered clouds":
            day2WeatherIcon.src = "./assets/SunCloud.png";
            day2WeatherIconDrop.src = "./assets/SunCloud.png";
            break;
        case "broken clouds":
            day2WeatherIcon.src = "./assets/SunCloud.png";
            day2WeatherIconDrop.src = "./assets/SunCloud.png";
            break;
        case "shower rain":
            day2WeatherIcon.src = "./assets/Rainy.png";
            day2WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "thunderstorm":
            day2WeatherIcon.src = "./assets/Rainy.png";
            day2WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "snow":
            day2WeatherIcon.src = "./assets/Rainy.png";
            day2WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "mist":
            day2WeatherIcon.src = "./assets/SunCloud.png";
            day2WeatherIconDrop.src = "./assets/SunCloud.png";
            break;
        case "light rain":
            day2WeatherIcon.src = "./assets/Rainy.png";
            day2WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "smoke":
            day2WeatherIcon.src = "./assets/SunCloud.png";
            day2WeatherIconDrop.src = "./assets/SunCloud.png";
            break;
        case "haze":
            day2WeatherIcon.src = "./assets/SunCloud.png";
            day2WeatherIconDrop.src = "./assets/SunCloud.png";
            break;
        case "sand/dusk whirls":
            day2WeatherIcon.src = "./assets/SunCloud.png";
            day2WeatherIconDrop.src = "./assets/SunCloud.png";
            break;
        case "fog":
            day2WeatherIcon.src = "./assets/SunCloud.png";
            day2WeatherIconDrop.src = "./assets/SunCloud.png";
            break;
        case "sand":
            day2WeatherIcon.src = "./assets/SunCloud.png";
            day2WeatherIconDrop.src = "./assets/SunCloud.png";
            break;
        case "volcanic ash":
            day2WeatherIcon.src = "./assets/SunCloud.png";
            day2WeatherIconDrop.src = "./assets/SunCloud.png";
            break;
        case "squalls":
            day2WeatherIcon.src = "./assets/SunCloud.png";
            day2WeatherIconDrop.src = "./assets/SunCloud.png";
            break;
        case "tornado":
            day2WeatherIcon.src = "./assets/SunCloud.png";
            day2WeatherIconDrop.src = "./assets/SunCloud.png";
            break;
        case "overcast clouds":
            day2WeatherIcon.src = "./assets/SunCloud.png";
            day2WeatherIconDrop.src = "./assets/SunCloud.png";
            break;
        case "light snow":
            day2WeatherIcon.src = "./assets/Rainy.png";
            day2WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "heavy snow":
            day2WeatherIcon.src = "./assets/Rainy.png";
            day2WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "sleet":
            day2WeatherIcon.src = "./assets/Rainy.png";
            day2WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "light shower sleet":
            day2WeatherIcon.src = "./assets/Rainy.png";
            day2WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "shower sleet":
            day2WeatherIcon.src = "./assets/Rainy.png";
            day2WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "light rain and snow":
            day2WeatherIcon.src = "./assets/Rainy.png";
            day2WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "rain and snow":
            day2WeatherIcon.src = "./assets/Rainy.png";
            day2WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "light shower snow":
            day2WeatherIcon.src = "./assets/Rainy.png";
            day2WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "shower snow":
            day2WeatherIcon.src = "./assets/Rainy.png";
            day2WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "heavy shower snow":
            day2WeatherIcon.src = "./assets/Rainy.png";
            day2WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "moderate rain":
            day2WeatherIcon.src = "./assets/Rainy.png";
            day2WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "heavy intensity rain":
            day2WeatherIcon.src = "./assets/Rainy.png";
            day2WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "very heavy rain":
            day2WeatherIcon.src = "./assets/Rainy.png";
            day2WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "extreme rain":
            day2WeatherIcon.src = "./assets/Rainy.png";
            day2WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "freezing rain":
            day2WeatherIcon.src = "./assets/Rainy.png";
            day2WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "light intensity shower rain":
            day2WeatherIcon.src = "./assets/Rainy.png";
            day2WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "shower rain":
            day2WeatherIcon.src = "./assets/Rainy.png";
            day2WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "heavy intensity shower rain":
            day2WeatherIcon.src = "./assets/Rainy.png";
            day2WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "ragged shower rain":
            day2WeatherIcon.src = "./assets/Rainy.png";
            day2WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "light intensity drizzle":
            day2WeatherIcon.src = "./assets/Rainy.png";
            day2WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "dizzle":
            day2WeatherIcon.src = "./assets/Rainy.png";
            day2WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "heavy intensity drizzle":
            day2WeatherIcon.src = "./assets/Rainy.png";
            day2WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "light intensity drizzle rain":
            day2WeatherIcon.src = "./assets/Rainy.png";
            day2WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "drizzle rain":
            day2WeatherIcon.src = "./assets/Rainy.png";
            day2WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "heavy intensity drizzle rain":
            day2WeatherIcon.src = "./assets/Rainy.png";
            day2WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "shower rain and drizzle":
            day2WeatherIcon.src = "./assets/Rainy.png";
            day2WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "heavy shower rain and drizzle":
            day2WeatherIcon.src = "./assets/Rainy.png";
            day2WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "shower drizzle":
            day2WeatherIcon.src = "./assets/Rainy.png";
            day2WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "thunderstorm with light rain":
            day2WeatherIcon.src = "./assets/Rainy.png";
            day2WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "thunderstorm with rain":
            day2WeatherIcon.src = "./assets/Rainy.png";
            day2WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "thunderstorm with heavy rain":
            day2WeatherIcon.src = "./assets/Rainy.png";
            day2WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "light thunderstorm":
            day2WeatherIcon.src = "./assets/Rainy.png";
            day2WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "heavy thunderstorm":
            day2WeatherIcon.src = "./assets/Rainy.png";
            day2WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "ragged thunderstorm":
            day2WeatherIcon.src = "./assets/Rainy.png";
            day2WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "thunderstorm with light drizzle":
            day2WeatherIcon.src = "./assets/Rainy.png";
            day2WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "thunderstorm with drizzle":
            day2WeatherIcon.src = "./assets/Rainy.png";
            day2WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "thunderstorm with heavy drizzle":
            day2WeatherIcon.src = "./assets/Rainy.png";
            day2WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        default:
            day2WeatherIcon.src = "./assets/SunnySmall.png";
            day2WeatherIconDrop.src = "./assets/SunnySmall.png";
    }
}

function WeatherIconForecast3(weatherCondition) {
    switch (weatherCondition) {
        case "rain":
            day3WeatherIcon.src = "./assets/Rainy.png";
            day3WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "clear sky":
            day3WeatherIcon.src = "./assets/SunnySmall.png";
            day3WeatherIconDrop.src = "./assets/SunnySmall.png";
            break;
        case "few clouds":
            day3WeatherIcon.src = "./assets/SunCloud.png";
            day3WeatherIconDrop.src = "./assets/SunCloud.png";
            break;
        case "scattered clouds":
            day3WeatherIcon.src = "./assets/SunCloud.png";
            day3WeatherIconDrop.src = "./assets/SunCloud.png";
            break;
        case "broken clouds":
            day3WeatherIcon.src = "./assets/SunCloud.png";
            day3WeatherIconDrop.src = "./assets/SunCloud.png";
            break;
        case "shower rain":
            day3WeatherIcon.src = "./assets/Rainy.png";
            day3WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "thunderstorm":
            day3WeatherIcon.src = "./assets/Rainy.png";
            day3WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "snow":
            day3WeatherIcon.src = "./assets/Rainy.png";
            day3WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "mist":
            day3WeatherIcon.src = "./assets/SunCloud.png";
            day3WeatherIconDrop.src = "./assets/SunCloud.png";
            break;
        case "light rain":
            day3WeatherIcon.src = "./assets/Rainy.png";
            day3WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "smoke":
            day3WeatherIcon.src = "./assets/SunCloud.png";
            day3WeatherIconDrop.src = "./assets/SunCloud.png";
            break;
        case "haze":
            day3WeatherIcon.src = "./assets/SunCloud.png";
            day3WeatherIconDrop.src = "./assets/SunCloud.png";
            break;
        case "sand/dusk whirls":
            day3WeatherIcon.src = "./assets/SunCloud.png";
            day3WeatherIconDrop.src = "./assets/SunCloud.png";
            break;
        case "fog":
            day3WeatherIcon.src = "./assets/SunCloud.png";
            day3WeatherIconDrop.src = "./assets/SunCloud.png";
            break;
        case "sand":
            day3WeatherIcon.src = "./assets/SunCloud.png";
            day3WeatherIconDrop.src = "./assets/SunCloud.png";
            break;
        case "volcanic ash":
            day3WeatherIcon.src = "./assets/SunCloud.png";
            day3WeatherIconDrop.src = "./assets/SunCloud.png";
            break;
        case "squalls":
            day3WeatherIcon.src = "./assets/SunCloud.png";
            day3WeatherIconDrop.src = "./assets/SunCloud.png";
            break;
        case "tornado":
            day3WeatherIcon.src = "./assets/SunCloud.png";
            day3WeatherIconDrop.src = "./assets/SunCloud.png";
            break;
        case "overcast clouds":
            day3WeatherIcon.src = "./assets/SunCloud.png";
            day3WeatherIconDrop.src = "./assets/SunCloud.png";
            break;
        case "light snow":
            day3WeatherIcon.src = "./assets/Rainy.png";
            day3WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "heavy snow":
            day3WeatherIcon.src = "./assets/Rainy.png";
            day3WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "sleet":
            day3WeatherIcon.src = "./assets/Rainy.png";
            day3WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "light shower sleet":
            day3WeatherIcon.src = "./assets/Rainy.png";
            day3WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "shower sleet":
            day3WeatherIcon.src = "./assets/Rainy.png";
            day3WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "light rain and snow":
            day3WeatherIcon.src = "./assets/Rainy.png";
            day3WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "rain and snow":
            day3WeatherIcon.src = "./assets/Rainy.png";
            day3WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "light shower snow":
            day3WeatherIcon.src = "./assets/Rainy.png";
            day3WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "shower snow":
            day3WeatherIcon.src = "./assets/Rainy.png";
            day3WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "heavy shower snow":
            day3WeatherIcon.src = "./assets/Rainy.png";
            day3WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "moderate rain":
            day3WeatherIcon.src = "./assets/Rainy.png";
            day3WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "heavy intensity rain":
            day3WeatherIcon.src = "./assets/Rainy.png";
            day3WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "very heavy rain":
            day3WeatherIcon.src = "./assets/Rainy.png";
            day3WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "extreme rain":
            day3WeatherIcon.src = "./assets/Rainy.png";
            day3WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "freezing rain":
            day3WeatherIcon.src = "./assets/Rainy.png";
            day3WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "light intensity shower rain":
            day3WeatherIcon.src = "./assets/Rainy.png";
            day3WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "shower rain":
            day3WeatherIcon.src = "./assets/Rainy.png";
            day3WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "heavy intensity shower rain":
            day3WeatherIcon.src = "./assets/Rainy.png";
            day3WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "ragged shower rain":
            day3WeatherIcon.src = "./assets/Rainy.png";
            day3WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "light intensity drizzle":
            day3WeatherIcon.src = "./assets/Rainy.png";
            day3WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "dizzle":
            day3WeatherIcon.src = "./assets/Rainy.png";
            day3WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "heavy intensity drizzle":
            day3WeatherIcon.src = "./assets/Rainy.png";
            day3WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "light intensity drizzle rain":
            day3WeatherIcon.src = "./assets/Rainy.png";
            day3WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "drizzle rain":
            day3WeatherIcon.src = "./assets/Rainy.png";
            day3WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "heavy intensity drizzle rain":
            day3WeatherIcon.src = "./assets/Rainy.png";
            day3WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "shower rain and drizzle":
            day3WeatherIcon.src = "./assets/Rainy.png";
            day3WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "heavy shower rain and drizzle":
            day3WeatherIcon.src = "./assets/Rainy.png";
            day3WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "shower drizzle":
            day3WeatherIcon.src = "./assets/Rainy.png";
            day3WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "thunderstorm with light rain":
            day3WeatherIcon.src = "./assets/Rainy.png";
            day3WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "thunderstorm with rain":
            day3WeatherIcon.src = "./assets/Rainy.png";
            day3WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "thunderstorm with heavy rain":
            day3WeatherIcon.src = "./assets/Rainy.png";
            day3WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "light thunderstorm":
            day3WeatherIcon.src = "./assets/Rainy.png";
            day3WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "heavy thunderstorm":
            day3WeatherIcon.src = "./assets/Rainy.png";
            day3WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "ragged thunderstorm":
            day3WeatherIcon.src = "./assets/Rainy.png";
            day3WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "thunderstorm with light drizzle":
            day3WeatherIcon.src = "./assets/Rainy.png";
            day3WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "thunderstorm with drizzle":
            day3WeatherIcon.src = "./assets/Rainy.png";
            day3WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "thunderstorm with heavy drizzle":
            day3WeatherIcon.src = "./assets/Rainy.png";
            day3WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        default:
            day3WeatherIcon.src = "./assets/SunnySmall.png";
            day3WeatherIconDrop.src = "./assets/SunnySmall.png";
    }
}

function WeatherIconForecast4(weatherCondition) {
    switch (weatherCondition) {
        case "rain":
            day4WeatherIcon.src = "./assets/Rainy.png";
            day4WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "clear sky":
            day4WeatherIcon.src = "./assets/SunnySmall.png";
            day4WeatherIconDrop.src = "./assets/SunnySmall.png";
            break;
        case "few clouds":
            day4WeatherIcon.src = "./assets/SunCloud.png";
            day4WeatherIconDrop.src = "./assets/SunCloud.png";
            break;
        case "scattered clouds":
            day4WeatherIcon.src = "./assets/SunCloud.png";
            day4WeatherIconDrop.src = "./assets/SunCloud.png";
            break;
        case "broken clouds":
            day4WeatherIcon.src = "./assets/SunCloud.png";
            day4WeatherIconDrop.src = "./assets/SunCloud.png";
            break;
        case "shower rain":
            day4WeatherIcon.src = "./assets/Rainy.png";
            day4WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "thunderstorm":
            day4WeatherIcon.src = "./assets/Rainy.png";
            day4WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "snow":
            day4WeatherIcon.src = "./assets/Rainy.png";
            day4WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "mist":
            day4WeatherIcon.src = "./assets/SunCloud.png";
            day4WeatherIconDrop.src = "./assets/SunCloud.png";
            break;
        case "light rain":
            day4WeatherIcon.src = "./assets/Rainy.png";
            day4WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "smoke":
            day4WeatherIcon.src = "./assets/SunCloud.png";
            day4WeatherIconDrop.src = "./assets/SunCloud.png";
            break;
        case "haze":
            day4WeatherIcon.src = "./assets/SunCloud.png";
            day4WeatherIconDrop.src = "./assets/SunCloud.png";
            break;
        case "sand/dusk whirls":
            day4WeatherIcon.src = "./assets/SunCloud.png";
            day4WeatherIconDrop.src = "./assets/SunCloud.png";
            break;
        case "fog":
            day4WeatherIcon.src = "./assets/SunCloud.png";
            day4WeatherIconDrop.src = "./assets/SunCloud.png";
            break;
        case "sand":
            day4WeatherIcon.src = "./assets/SunCloud.png";
            day4WeatherIconDrop.src = "./assets/SunCloud.png";
            break;
        case "volcanic ash":
            day4WeatherIcon.src = "./assets/SunCloud.png";
            day4WeatherIconDrop.src = "./assets/SunCloud.png";
            break;
        case "squalls":
            day4WeatherIcon.src = "./assets/SunCloud.png";
            day4WeatherIconDrop.src = "./assets/SunCloud.png";
            break;
        case "tornado":
            day4WeatherIcon.src = "./assets/SunCloud.png";
            day4WeatherIconDrop.src = "./assets/SunCloud.png";
            break;
        case "overcast clouds":
            day4WeatherIcon.src = "./assets/SunCloud.png";
            day4WeatherIconDrop.src = "./assets/SunCloud.png";
            break;
        case "light snow":
            day4WeatherIcon.src = "./assets/Rainy.png";
            day4WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "heavy snow":
            day4WeatherIcon.src = "./assets/Rainy.png";
            day4WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "sleet":
            day4WeatherIcon.src = "./assets/Rainy.png";
            day4WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "light shower sleet":
            day4WeatherIcon.src = "./assets/Rainy.png";
            day4WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "shower sleet":
            day4WeatherIcon.src = "./assets/Rainy.png";
            day4WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "light rain and snow":
            day4WeatherIcon.src = "./assets/Rainy.png";
            day4WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "rain and snow":
            day4WeatherIcon.src = "./assets/Rainy.png";
            day4WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "light shower snow":
            day4WeatherIcon.src = "./assets/Rainy.png";
            day4WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "shower snow":
            day4WeatherIcon.src = "./assets/Rainy.png";
            day4WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "heavy shower snow":
            day4WeatherIcon.src = "./assets/Rainy.png";
            day4WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "moderate rain":
            day4WeatherIcon.src = "./assets/Rainy.png";
            day4WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "heavy intensity rain":
            day4WeatherIcon.src = "./assets/Rainy.png";
            day4WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "very heavy rain":
            day4WeatherIcon.src = "./assets/Rainy.png";
            day4WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "extreme rain":
            day4WeatherIcon.src = "./assets/Rainy.png";
            day4WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "freezing rain":
            day4WeatherIcon.src = "./assets/Rainy.png";
            day4WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "light intensity shower rain":
            day4WeatherIcon.src = "./assets/Rainy.png";
            day4WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "shower rain":
            day4WeatherIcon.src = "./assets/Rainy.png";
            day4WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "heavy intensity shower rain":
            day4WeatherIcon.src = "./assets/Rainy.png";
            day4WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "ragged shower rain":
            day4WeatherIcon.src = "./assets/Rainy.png";
            day4WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "light intensity drizzle":
            day4WeatherIcon.src = "./assets/Rainy.png";
            day4WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "dizzle":
            day4WeatherIcon.src = "./assets/Rainy.png";
            day4WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "heavy intensity drizzle":
            day4WeatherIcon.src = "./assets/Rainy.png";
            day4WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "light intensity drizzle rain":
            day4WeatherIcon.src = "./assets/Rainy.png";
            day4WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "drizzle rain":
            day4WeatherIcon.src = "./assets/Rainy.png";
            day4WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "heavy intensity drizzle rain":
            day4WeatherIcon.src = "./assets/Rainy.png";
            day4WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "shower rain and drizzle":
            day4WeatherIcon.src = "./assets/Rainy.png";
            day4WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "heavy shower rain and drizzle":
            day4WeatherIcon.src = "./assets/Rainy.png";
            day4WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "shower drizzle":
            day4WeatherIcon.src = "./assets/Rainy.png";
            day4WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "thunderstorm with light rain":
            day4WeatherIcon.src = "./assets/Rainy.png";
            day4WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "thunderstorm with rain":
            day4WeatherIcon.src = "./assets/Rainy.png";
            day4WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "thunderstorm with heavy rain":
            day4WeatherIcon.src = "./assets/Rainy.png";
            day4WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "light thunderstorm":
            day4WeatherIcon.src = "./assets/Rainy.png";
            day4WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "heavy thunderstorm":
            day4WeatherIcon.src = "./assets/Rainy.png";
            day4WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "ragged thunderstorm":
            day4WeatherIcon.src = "./assets/Rainy.png";
            day4WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "thunderstorm with light drizzle":
            day4WeatherIcon.src = "./assets/Rainy.png";
            day4WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "thunderstorm with drizzle":
            day4WeatherIcon.src = "./assets/Rainy.png";
            day4WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "thunderstorm with heavy drizzle":
            day4WeatherIcon.src = "./assets/Rainy.png";
            day4WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        default:
            day4WeatherIcon.src = "./assets/SunnySmall.png";
            day4WeatherIconDrop.src = "./assets/SunnySmall.png";
    }
}

function WeatherIconForecast5(weatherCondition) {
    switch (weatherCondition) {
        case "rain":
            day5WeatherIcon.src = "./assets/Rainy.png";
            day5WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "clear sky":
            day5WeatherIcon.src = "./assets/SunnySmall.png";
            day5WeatherIconDrop.src = "./assets/SunnySmall.png";
            break;
        case "few clouds":
            day5WeatherIcon.src = "./assets/SunCloud.png";
            day5WeatherIconDrop.src = "./assets/SunCloud.png";
            break;
        case "scattered clouds":
            day5WeatherIcon.src = "./assets/SunCloud.png";
            day5WeatherIconDrop.src = "./assets/SunCloud.png";
            break;
        case "broken clouds":
            day5WeatherIcon.src = "./assets/SunCloud.png";
            day5WeatherIconDrop.src = "./assets/SunCloud.png";
            break;
        case "shower rain":
            day5WeatherIcon.src = "./assets/Rainy.png";
            day5WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "thunderstorm":
            day5WeatherIcon.src = "./assets/Rainy.png";
            day5WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "snow":
            day5WeatherIcon.src = "./assets/Rainy.png";
            day5WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "mist":
            day5WeatherIcon.src = "./assets/SunCloud.png";
            day5WeatherIconDrop.src = "./assets/SunCloud.png";
            break;
        case "light rain":
            day5WeatherIcon.src = "./assets/Rainy.png";
            day5WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "smoke":
            day5WeatherIcon.src = "./assets/SunCloud.png";
            day5WeatherIconDrop.src = "./assets/SunCloud.png";
            break;
        case "haze":
            day5WeatherIcon.src = "./assets/SunCloud.png";
            day5WeatherIconDrop.src = "./assets/SunCloud.png";
            break;
        case "sand/dusk whirls":
            day5WeatherIcon.src = "./assets/SunCloud.png";
            day5WeatherIconDrop.src = "./assets/SunCloud.png";
            break;
        case "fog":
            day5WeatherIcon.src = "./assets/SunCloud.png";
            day5WeatherIconDrop.src = "./assets/SunCloud.png";
            break;
        case "sand":
            day5WeatherIcon.src = "./assets/SunCloud.png";
            day5WeatherIconDrop.src = "./assets/SunCloud.png";
            break;
        case "volcanic ash":
            day5WeatherIcon.src = "./assets/SunCloud.png";
            day5WeatherIconDrop.src = "./assets/SunCloud.png";
            break;
        case "squalls":
            day5WeatherIcon.src = "./assets/SunCloud.png";
            day5WeatherIconDrop.src = "./assets/SunCloud.png";
            break;
        case "tornado":
            day5WeatherIcon.src = "./assets/SunCloud.png";
            day5WeatherIconDrop.src = "./assets/SunCloud.png";
            break;
        case "overcast clouds":
            day5WeatherIcon.src = "./assets/SunCloud.png";
            day5WeatherIconDrop.src = "./assets/SunCloud.png";
            break;
        case "light snow":
            day5WeatherIcon.src = "./assets/Rainy.png";
            day5WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "heavy snow":
            day5WeatherIcon.src = "./assets/Rainy.png";
            day5WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "sleet":
            day5WeatherIcon.src = "./assets/Rainy.png";
            day5WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "light shower sleet":
            day5WeatherIcon.src = "./assets/Rainy.png";
            day5WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "shower sleet":
            day5WeatherIcon.src = "./assets/Rainy.png";
            day5WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "light rain and snow":
            day5WeatherIcon.src = "./assets/Rainy.png";
            day5WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "rain and snow":
            day5WeatherIcon.src = "./assets/Rainy.png";
            day5WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "light shower snow":
            day5WeatherIcon.src = "./assets/Rainy.png";
            day5WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "shower snow":
            day5WeatherIcon.src = "./assets/Rainy.png";
            day5WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "heavy shower snow":
            day5WeatherIcon.src = "./assets/Rainy.png";
            day5WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "moderate rain":
            day5WeatherIcon.src = "./assets/Rainy.png";
            day5WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "heavy intensity rain":
            day5WeatherIcon.src = "./assets/Rainy.png";
            day5WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "very heavy rain":
            day5WeatherIcon.src = "./assets/Rainy.png";
            day5WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "extreme rain":
            day5WeatherIcon.src = "./assets/Rainy.png";
            day5WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "freezing rain":
            day5WeatherIcon.src = "./assets/Rainy.png";
            day5WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "light intensity shower rain":
            day5WeatherIcon.src = "./assets/Rainy.png";
            day5WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "shower rain":
            day5WeatherIcon.src = "./assets/Rainy.png";
            day5WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "heavy intensity shower rain":
            day5WeatherIcon.src = "./assets/Rainy.png";
            day5WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "ragged shower rain":
            day5WeatherIcon.src = "./assets/Rainy.png";
            day5WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "light intensity drizzle":
            day5WeatherIcon.src = "./assets/Rainy.png";
            day5WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "dizzle":
            day5WeatherIcon.src = "./assets/Rainy.png";
            day5WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "heavy intensity drizzle":
            day5WeatherIcon.src = "./assets/Rainy.png";
            day5WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "light intensity drizzle rain":
            day5WeatherIcon.src = "./assets/Rainy.png";
            day5WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "drizzle rain":
            day5WeatherIcon.src = "./assets/Rainy.png";
            day5WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "heavy intensity drizzle rain":
            day5WeatherIcon.src = "./assets/Rainy.png";
            day5WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "shower rain and drizzle":
            day5WeatherIcon.src = "./assets/Rainy.png";
            day5WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "heavy shower rain and drizzle":
            day5WeatherIcon.src = "./assets/Rainy.png";
            day5WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "shower drizzle":
            day5WeatherIcon.src = "./assets/Rainy.png";
            day5WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "thunderstorm with light rain":
            day5WeatherIcon.src = "./assets/Rainy.png";
            day5WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "thunderstorm with rain":
            day5WeatherIcon.src = "./assets/Rainy.png";
            day5WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "thunderstorm with heavy rain":
            day5WeatherIcon.src = "./assets/Rainy.png";
            day5WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "light thunderstorm":
            day5WeatherIcon.src = "./assets/Rainy.png";
            day5WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "heavy thunderstorm":
            day5WeatherIcon.src = "./assets/Rainy.png";
            day5WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "ragged thunderstorm":
            day5WeatherIcon.src = "./assets/Rainy.png";
            day5WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "thunderstorm with light drizzle":
            day5WeatherIcon.src = "./assets/Rainy.png";
            day5WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "thunderstorm with drizzle":
            day5WeatherIcon.src = "./assets/Rainy.png";
            day5WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        case "thunderstorm with heavy drizzle":
            day5WeatherIcon.src = "./assets/Rainy.png";
            day5WeatherIconDrop.src = "./assets/Rainy.png";
            break;
        default:
            day5WeatherIcon.src = "./assets/SunnySmall.png";
            day5WeatherIconDrop.src = "./assets/SunnySmall.png";
    }
}
GetDay();


// Favorite

favoriteBtn.addEventListener("click", function () {
    let favoriteLocation = {
        city: cityName,
        state: currentStVar,
        country: currentCountry,
    };

    let favArray = JSON.parse(localStorage.getItem("favWeather")) || [];

    let locationIndex = favArray.findIndex(function (loc) {
        return loc.city === favoriteLocation.city && loc.state === favoriteLocation.state;
    });
    console.log(locationIndex)
    if (locationIndex !== -1) {
        favArray.splice(locationIndex, 1);
        nonFavBtn.src = "./assets/NonFav.png"

    } else {
        favArray.push(favoriteLocation);
        nonFavBtn.src = "./assets/Fav.png"
    }
    localStorage.setItem("favWeather", JSON.stringify(favArray));
});


let isDropdownVisible = false;

function MakeDropDown() {
    // Get favorite location
    let favArray = JSON.parse(localStorage.getItem("favWeather")) || [];

    let ul = document.createElement("ul");
    ul.className = "list-group ms-4";

    let li = document.createElement("li");
    li.className = "list-group-item";
    li.innerText = "Favorite Locations"
    li.style.color = "yellow";
    li.style.backgroundColor = "#606971";
    li.style.fontFamily = "JosefinSans-Bold";
    li.style.fontSize = "20px";


    ul.appendChild(li);
    favArray.forEach(function (location) {
        let li = document.createElement("li");
        li.className = "list-group-item";
        li.innerText = `${location.city}, ${StateIntoAB(location.state)}, ${location.country}`;
        li.style.backgroundColor = "#606971";
        li.style.color = "white";
        li.style.fontFamily = "JosefinSans-Regular";
        li.style.fontSize = "20px";

        // Add a click event listener to each li
        li.addEventListener("click", function () {
            FavInput(location.city, location.state);
        });

        ul.appendChild(li);
    });

    ul.style.zIndex = "10";
    ul.style.position = "absolute";
    ul.style.width = "590px";
    ul.style.top = "65px";

    insertHere.innerHTML = "";
    insertHere.appendChild(ul);

    if (isDropdownVisible) {
        ul.style.display = 'none';
    } else {
        ul.style.display = 'block';
    }

    isDropdownVisible = !isDropdownVisible;
}

searchFavBtn.addEventListener("click", function (e) {
    e.preventDefault();
    MakeDropDown();
    updateWeatherUnits();
});

document.getElementById("searchInput").addEventListener("focus", function () {
    document.querySelector(".recentSearch").style.display = "block";
});

document.getElementById("searchInput").addEventListener("blur", function () {
    document.querySelector(".recentSearch").style.display = "none";
});

// let recentList = document.querySelector(".recentList");
// let searchBox = document.querySelector(".searchBox");

// let submitForm = document.getElementById("submitForm");
// let recentSearch = [];

// submitForm.addEventListener("submit", function (e) {
//     e.preventDefault();

//     recentSearch.unshift(searchBox.value);
//     console.log(recentSearch);

//     let recentHTMLList = "";

//     for (let i = 0; i < recentSearch.length; i++) {
//         recentHTMLList += `
//         <div class="recentItem mt-3">
//             <i><img src="./assets/Recent.png" alt=""></i>
//             <p style="font-size: 20px;">${recentSearch[i]}</p>
//         </div>`;
//     }

//     recentList.innerHTML = recentHTMLList;
// });

async function FavInput(favInputs) {
    const promise = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${favInputs}&appid=${apiKey}`);
    const data = await promise.json();
    console.log(data);
    latitude = data.coord.lat;
    longitude = data.coord.lon;
    // currentStVar = data[0].state;
    // currentCountry = data[0].country;
    // cityName = data.name;

    currentState.innerText = StateIntoAB(currentStVar);
    FetchLocalWeather(latitude, longitude);
    GetHighnLow(latitude, longitude);
    ReverseGeoLocation(latitude, longitude);

}

turnToCelc.addEventListener("click", function () {
    turnToFeh.style.opacity = ".55"
    turnToCelc.style.opacity = "1"
    changeF1.style.opacity = ".55"
    changeC1.style.opacity = "1"
    changeF2.style.opacity = ".55"
    changeC2.style.opacity = "1"
    changeF3.style.opacity = ".55"
    changeC3.style.opacity = "1"
    changeF4.style.opacity = ".55"
    changeC4.style.opacity = "1"


    change1Unit.innerText = "°C";
    change2Unit.innerText = "°C";
    change3Unit.innerText = "°C";
    change4Unit.innerText = "°C";
    change5Unit.innerText = "°C";
    change6Unit.innerText = "°C";
    change7Unit.innerText = "°C";
    change8Unit.innerText = "°C";
    change9Unit.innerText = "°C";
    change10Unit.innerText = "°C";
    change11Unit.innerText = "°C";
    change12Unit.innerText = "°C";
    units = "&units=metric";
    updateWeatherUnits();
});

turnToFeh.addEventListener("click", function () {
    turnToFeh.style.opacity = "1";
    turnToCelc.style.opacity = ".55";

    changeF1.style.opacity = "1"
    changeC1.style.opacity = ".55"
    changeF2.style.opacity = "1"
    changeC2.style.opacity = ".55"
    changeF3.style.opacity = "1"
    changeC3.style.opacity = ".55"
    changeF4.style.opacity = "1"
    changeC4.style.opacity = ".55"

    change1Unit.innerText = "°F";
    change2Unit.innerText = "°F";
    change3Unit.innerText = "°F";
    change4Unit.innerText = "°F";
    change5Unit.innerText = "°F";
    change6Unit.innerText = "°F";
    change7Unit.innerText = "°F";
    change8Unit.innerText = "°F";
    change9Unit.innerText = "°F";
    change10Unit.innerText = "°F";
    change11Unit.innerText = "°F";
    change12Unit.innerText = "°F";
    units = "&units=imperial";
    updateWeatherUnits();
});

function updateWeatherUnits() {
    FetchLocalWeather(latitude, longitude);
    FetchFiveDayWeather(latitude, longitude);
    ReverseGeoLocation(latitude, longitude);
    GetHighnLow(latitude, longitude)
};

