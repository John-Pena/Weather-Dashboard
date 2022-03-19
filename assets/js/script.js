// https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid=28a7fce4f20896b97ae391942a7e9c8d

var button = document.querySelector('.btn');
var cityName = document.querySelector('.value');

var weatherUrl = "http://api.openweathermap.org/geo/1.0/direct?q="+cityName+"&appid=28a7fce4f20896b97ae391942a7e9c8d"

var getWeather = function() {
    fetch(weatherUrl).then(function(response) {
        console.log(response);
        if (response.ok) {
            response.json().then(function(data) {
                console.log(data);
            });
        };
    });
}


button.addEventListener('click', getWeather());