const param = {
    "url": "https://api.openweathermap.org/data/2.5/",
    "appid": "f405fa973c1339e48f29c3d3cfc8933e"
}

function getWeather() {
    const cityId = document.querySelector('.city').value;

    fetch(`${param.url}weather?id=${cityId}&units=metric&APPID=${param.appid}`)
        .then(weather => {
            return weather.json();
        }).then(showWeather);
}

function showWeather(data) {
    console.log(data);
    document.querySelector('.weather-city').textContent = data.name
    document.querySelector('.degree').innerHTML = Math.round(data.main.temp) + '&deg;'
    document.querySelector('.wind').innerHTML = data.wind.speed
    document.querySelector('.humidity').innerHTML = data.main.humidity
    document.querySelector('.pressure').innerHTML = data.main.pressure
}

getWeather();
document.querySelector('.city').onchange = getWeather;