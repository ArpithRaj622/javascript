function getWeather() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Weather received");
        }, 2000);
    });
}

function getTemperature() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Temperature received");
        }, 2000);
    });
}

async function getWeatherReport() {
    const weather = getWeather();
    const weatherResult = await weather;
    console.log(weatherResult);


    const temperature = getTemperature();
    const temperatureResult = await temperature;
    console.log(temperatureResult);
}

getWeatherReport();