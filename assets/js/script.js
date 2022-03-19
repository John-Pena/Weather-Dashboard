

// var cityName = document.querySelector('.value');
// var button = document.querySelector('.btn')
var APIKey = "28a7fce4f20896b97ae391942a7e9c8d";

// var cityUrl = "api.openweathermap.org/data/2.5/forecast?q=" + cityName.value + "&appid="+ APIKey + "&units=imperial";
var cityUrl = "https://api.openweathermap.org/data/2.5/forecast?q=Austin&limit=5&appid="+ APIKey + "&units=imperial";

// fecthes weather ubformation from API
var getCityWeather = function() {
    fetch(cityUrl).then(function(response) {
        console.log(response);
        if (response.ok) {
            response.json().then(function(data) {
                console.log(data);
                displayWeather(data);
            });
        };
    });
};

var displayWeather = function(weather) {

    // pulls temperature info from array
    var tempEl = document.createElement('span');
    tempEl.textContent = weather.list[0].main.temp;
    console.log(tempEl);
    
    // append temperature to container with class of display
    var dayOfTemp = document.querySelector('.day-of-temp')
    dayOfTemp.appendChild(tempEl);

    // Getting wind speed from array
    var windEl = document.createElement('span');
    windEl.textContent = weather.list[0]
};

getCityWeather();