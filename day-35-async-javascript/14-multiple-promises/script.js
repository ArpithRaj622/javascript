function getWeather() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Weather data received");
        }, 2000);
    });
}

function getTemperature() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Temperature: 28°C");
        }, 2000);
    });
}

getWeather()
    .then((result) => {
        console.log(result);
        return getTemperature();
    })
    .then((result) => {
        console.log(result);        
    });