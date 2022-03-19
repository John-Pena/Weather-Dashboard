var cityName = document.querySelector('.value');
console.log(cityName.text);
// var button = document.querySelector('.btn')

// fecthes weather formation from API
var getCityInfo = function() {

    var APIKey = "28a7fce4f20896b97ae391942a7e9c8d";
    var cityUrl = "http://api.openweathermap.org/geo/1.0/direct?q=SanAntonio&limit=5&appid=" + APIKey;

    fetch(cityUrl).then(function(response) {
        if (response.ok) {
            response.json().then(function(data) {
                getCityWeather(data);
            });
        };
    });
};

var getCityWeather = function(data) {

    // pulls lat from GeoAPI
    var lat = data[0].lat;
    console.log(lat);

    // pulls lon from GeoAPI
    var lon = data[0].lon;
    console.log(lon);

    // city weather API call
    var APIKey = "28a7fce4f20896b97ae391942a7e9c8d";
    var weatherUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&units=imperial&appid=" + APIKey;

    fetch(weatherUrl).then(function(response) {
        console.log(response);
        if(response.ok) {
            response.json().then(function(data) {
                console.log(data);
                displayWeather(data);
            });
        };
    });
};

var displayWeather = function(weather) {

    // pulls sky description ftom array API
    var skyDesc = document.querySelector('.sky-description');
    skyDesc.textContent = weather.list[0].weather[0].description;

    // pulls temperature info from array
    var tempEl = document.createElement('span');
    tempEl.textContent = weather.list[0].main.temp;
    console.log(tempEl);
    
    // append temperature to container with class of display
    var dayOfTemp = document.querySelector('.day-of-temp');
    dayOfTemp.appendChild(tempEl);

    // Getting Humidity info from array
    var humidityEl = document.createElement('span');
    humidityEl.textContent = weather.list[0].main.humidity;
    console.log(humidityEl);

    // append humidity to container with class of display
    var dayOfHumidity = document.querySelector('.day-of-humidity');
    dayOfHumidity.appendChild(humidityEl);

    // Getting wind speed from array
    var windEl = document.createElement('span');
    windEl.textContent = weather.list[0].wind.speed;
    console.log(windEl);

    // append wind speed to container with class of display
    var dayOfWind = document.querySelector('.day-of-wind');
    dayOfWind.appendChild(windEl);
};

getCityInfo();