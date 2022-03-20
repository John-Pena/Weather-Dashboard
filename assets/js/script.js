var cityName = document.location.search;
console.log(cityName);
var forecast = document.querySelector('.day-of-forecast');


// fecthes lat and lon from city name search
var getCityInfo = function() {

    var APIKey = "28a7fce4f20896b97ae391942a7e9c8d";
    var cityUrl = "http://api.openweathermap.org/geo/1.0/direct?q=SanAntonio&limit=5&appid=" + APIKey;

    fetch(cityUrl).then(function(response) {
        if (response.ok) {
            response.json().then(function(data) {
                getCityWeather(data);
                console.log(data);
            });
        };
    });
};

// gets weather from city using lat and lon
var getCityWeather = function(data) {

    // pulls lat from GeoAPI
    var lat = data[0].lat;
    console.log(lat);

    // pulls lon from GeoAPI
    var lon = data[0].lon;
    console.log(lon);

    // city weather API call
    var APIKey = "28a7fce4f20896b97ae391942a7e9c8d";
    var weatherUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=minutely,hourly&units=imperial&appid=" + APIKey;

    fetch(weatherUrl).then(function(response) {
        console.log(response);
        if(response.ok) {
            response.json().then(function(data) {
                console.log(data);
                displayDayOfWeather(data);
            });
        };
    });
};

// displays day of weather
var displayDayOfWeather = function(weather) {

    // pulls sky description ftom array API
    var skyDesc = document.querySelector('.sky-description');
    skyDesc.textContent = weather.current.weather[0].description;
    // displays weather icon
    var icon = weather.current.weather[0].icon;
    var showIcon = document.createElement('img');
    showIcon.src = 'http://openweathermap.org/img/wn/' + icon + '@2x.png';
    skyDesc.appendChild(showIcon);

    // pulls temperature info from array
    var tempEl = document.createElement('span');
    tempEl.textContent = weather.current.temp;
    // append temperature to container with class of display
    var dayOfTemp = document.querySelector('.day-of-temp');
    dayOfTemp.appendChild(tempEl);

    // Getting Humidity info from array
    var humidityEl = document.createElement('span');
    humidityEl.textContent = weather.current.humidity;
    // append humidity to container with class of display
    var dayOfHumidity = document.querySelector('.day-of-humidity');
    dayOfHumidity.appendChild(humidityEl);

    // Getting wind speed from array
    var windEl = document.createElement('span');
    windEl.textContent = weather.current.wind_speed;
    // append wind speed to container with class of display
    var dayOfWind = document.querySelector('.day-of-wind');
    dayOfWind.appendChild(windEl);

    // pulls uv Index from current array
    var uvIndex = document.createElement('span');
    uvIndex.textContent = weather.current.uvi;
    // append uv Index to dom
    var dayOfIndex = document.querySelector('.day-of-UV');
    dayOfIndex.appendChild(uvIndex);

    // if statement for uv index color dictating low uv to extreme uv
    if (uvIndex >= 11) {
        // adds purple to background
        forecast.classList.add('.extreme-uv-index');
    }
    else if (8 <= uvIndex >= 10) {
        // adds red to background
        forecast.classList.add('very-high-uv-index');
    }
    else if (6 <= uvIndex >= 7) {
        // adds orange to background
        forecast.classList.add('high-uv-index');
    }
    else if (3 <= uvIndex >= 5) {
        // adds yellow to background
        forecast.classList.add('moderate-uv-index');
    }
    else {
        // adds green to background
        forecast.classList.add('low-uv-index');
    };
};

var fiveDayForecast = function() {

};

var displayDate = function() {
    
    var date = document.querySelector('.city-name');
    date.textContent = moment().format('LL');
    console.log(date);
    
};

getCityInfo();
displayDate();