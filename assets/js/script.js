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

                firstDayForecast(data.daily)
                secondDayForecast(data.daily)
                thirdDayForecast(data.daily)
                fourthDayForecast(data.daily)
                fiveDayForecast(data.daily)
            });
        };
    });
};

var firstDayForecast = function (daily){

    var skyDesc = document.querySelector('.sky-description-1');
    skyDesc.textContent = daily[0].weather[0].description;

    // displays weather icon
    var icon = daily[0].weather[0].icon;
    var showIcon = document.createElement('img');
    showIcon.src = 'http://openweathermap.org/img/wn/' + icon + '@2x.png';
    skyDesc.appendChild(showIcon);

    // pulls temperature info from array
    var tempEl = document.querySelector('#temp-1');
    tempEl.textContent = daily[0].temp.day;

    // Getting Humidity info from array
    var humidityEl = document.querySelector('#humidity-1');
    humidityEl.textContent = daily[0].humidity;

    // Getting wind speed from array
    var windEl = document.querySelector('#wind-1');
    windEl.textContent = daily[0].wind_speed;

    // pulls uv Index from current array
    var uvIndex = document.querySelector('#uv-1');
    uvIndex.textContent = daily[0].uvi;
};

var secondDayForecast = function (daily) {

    var skyDesc = document.querySelector('.sky-description-2');
    skyDesc.textContent = daily[1].weather[0].description;

    // displays weather icon
    var icon = daily[1].weather[0].icon;
    var showIcon = document.createElement('img');
    showIcon.src = 'http://openweathermap.org/img/wn/' + icon + '@2x.png';
    skyDesc.appendChild(showIcon);

    // pulls temperature info from array
    var tempEl = document.querySelector('#temp-2');
    tempEl.textContent = daily[1].temp.day;

    // Getting Humidity info from array
    var humidityEl = document.querySelector('#humidity-2');
    humidityEl.textContent = daily[1].humidity;

    // Getting wind speed from array
    var windEl = document.querySelector('#wind-2');
    windEl.textContent = daily[1].wind_speed;

    // pulls uv Index from current array
    var uvIndex = document.querySelector('#uv-2');
    uvIndex.textContent = daily[1].uvi;
};

var thirdDayForecast = function (daily) {

    var skyDesc = document.querySelector('.sky-description-3');
    skyDesc.textContent = daily[2].weather[0].description;
    
    // displays weather icon
    var icon = daily[2].weather[0].icon;
    var showIcon = document.createElement('img');
    showIcon.src = 'http://openweathermap.org/img/wn/' + icon + '@2x.png';
    skyDesc.appendChild(showIcon);

    // pulls temperature info from array
    var tempEl = document.querySelector('#temp-3');
    tempEl.textContent = daily[2].temp.day;

    // Getting Humidity info from array
    var humidityEl = document.querySelector('#humidity-3');
    humidityEl.textContent = daily[2].humidity;

    // Getting wind speed from array
    var windEl = document.querySelector('#wind-3');
    windEl.textContent = daily[2].wind_speed;

    // pulls uv Index from current array
    var uvIndex = document.querySelector('#uv-3');
    uvIndex.textContent = daily[2].uvi;3
};

var fourthDayForecast = function (daily) {

    var skyDesc = document.querySelector('.sky-description-4');
    skyDesc.textContent = daily[3].weather[0].description;
    
    // displays weather icon
    var icon = daily[3].weather[0].icon;
    var showIcon = document.createElement('img');
    showIcon.src = 'http://openweathermap.org/img/wn/' + icon + '@2x.png';
    skyDesc.appendChild(showIcon);

    // pulls temperature info from array
    var tempEl = document.querySelector('#temp-4');
    tempEl.textContent = daily[3].temp.day;

    // Getting Humidity info from array
    var humidityEl = document.querySelector('#humidity-4');
    humidityEl.textContent = daily[3].humidity;

    // Getting wind speed from array
    var windEl = document.querySelector('#wind-4');
    windEl.textContent = daily[3].wind_speed;

    // pulls uv Index from current array
    var uvIndex = document.querySelector('#uv-4');
    uvIndex.textContent = daily[3].uvi;4
};

var fiveDayForecast = function (daily) {

    var skyDesc = document.querySelector('.sky-description-5');
    skyDesc.textContent = daily[4].weather[0].description;

    // displays weather icon
    var icon = daily[4].weather[0].icon;
    var showIcon = document.createElement('img');
    showIcon.src = 'http://openweathermap.org/img/wn/' + icon + '@2x.png';
    skyDesc.appendChild(showIcon);

    // pulls temperature info from array
    var tempEl = document.querySelector('#temp-5');
    tempEl.textContent = daily[4].temp.day;

    // Getting Humidity info from array
    var humidityEl = document.querySelector('#humidity-5');
    humidityEl.textContent = daily[4].humidity;

    // Getting wind speed from array
    var windEl = document.querySelector('#wind-5');
    windEl.textContent = daily[4].wind_speed;

    // pulls uv Index from current array
    var uvIndex = document.querySelector('#uv-5');
    uvIndex.textContent = daily[4].uvi;5


};

userInput.addEventListener('submit', formHandler);