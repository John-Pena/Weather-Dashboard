var citySearch = document.querySelector('#city-input');
var userInput = document.querySelector('#value');
var forecast = document.querySelector('.day-of-forecast');

// listens for submit on form
function formHandler(event) {
    event.preventDefault();

    var cityName = citySearch.value.trim();

    if (cityName) {
        getCityInfo(cityName);
    }
    else {
        alert('Error: City name does not exist');
    };

};

// fecthes lat and lon from city name search
var getCityInfo = function (cityName) {

    var displayCityName = document.querySelector('.city-name');
    displayCityName.textContent = cityName + ' ';

    var date = document.createElement('span');
    date.textContent = moment().format('LL');
    displayCityName.appendChild(date);


    var APIKey = "28a7fce4f20896b97ae391942a7e9c8d";
    var cityUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + APIKey;

    fetch(cityUrl).then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
                getCityWeather(data.coord);
                console.log(data);
            });
        };
    });
};

// gets weather from city using lat and lon
var getCityWeather = function (coord) {

    // city weather API call
    var APIKey = "28a7fce4f20896b97ae391942a7e9c8d";
    var weatherUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + coord.lat + "&lon=" + coord.lon + "&exclude=minutely,hourly&units=imperial&appid=" + APIKey;

    fetch(weatherUrl).then(function (response) {
        console.log(response);
        if (response.ok) {
            response.json().then(function (data) {
                console.log(data);

                var current = data.current;
                // pulls sky description ftom array API
                var skyDesc = document.querySelector('.sky-description');
                skyDesc.textContent = current.weather[0].description;

                // displays weather icon
                var icon = current.weather[0].icon;
                var showIcon = document.createElement('img');
                showIcon.src = 'http://openweathermap.org/img/wn/' + icon + '@2x.png';
                skyDesc.appendChild(showIcon);

                // pulls temperature info from array
                var tempEl = document.querySelector('#temp');
                tempEl.textContent = current.temp;

                // Getting Humidity info from array
                var humidityEl = document.querySelector('#humidity');
                humidityEl.textContent = current.humidity;

                // Getting wind speed from array
                var windEl = document.querySelector('#wind');
                windEl.textContent = current.wind_speed;

                // pulls uv Index from current array
                var uvIndex = document.querySelector('#uv');
                uvIndex.textContent = current.uvi;

                // if statement for uv index color dictating low uv to extreme uv
                if (uvIndex < 3) {
                    uvIndex.classList.add('low-uv-index');
                } else if (uvIndex >= 3 && uvIndex <= 5) {
                    uvIndex.classList.add('tag moderate-uv-index');
                } else if (uvIndex == 6 && uvIndex == 7) {
                    uvIndex.classList.add('tag high-uv-index');
                } else if (uvIndex >= 8 && uvIndex < 11) {
                    uvIndex.classList.add('tag very-high-uv-index');
                } else if (uvIndex >= 11) {
                    uvIndex.classList.add('tag extreme-uv-index');
                };

                fiveDayForecast(data.daily)
            });
        };
    });
};

var fiveDayForecast = function (data) {
    
};

userInput.addEventListener('submit', formHandler);
// getCityInfo();