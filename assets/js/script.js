

// var cityName = document.querySelector('.value');
// var button = document.querySelector('.btn')
var APIKey = "28a7fce4f20896b97ae391942a7e9c8d";

// var cityUrl = "api.openweathermap.org/data/2.5/forecast?q=" + cityName.value + "&appid="+ APIKey + "&units=imperial";
var cityUrl = "https://api.openweathermap.org/data/2.5/forecast?q=Austin&limit=5&appid="+ APIKey + "&units=imperial";

var getCityInfo = function() {
    fetch(cityUrl).then(function(response) {
        console.log(response);
        if (response.ok) {
            response.json().then(function(data) {
                console.log(data);
            });
        };
    });
};

getCityInfo();