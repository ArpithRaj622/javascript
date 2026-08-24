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
            reject("Temperature unavailable");
        }, 2000);
    });
}

async function getWeatherReport() {
    try {
        const weather = getWeather();
        const weatherResult = await weather;
        console.log(weatherResult);

        const temperature = getTemperature();
        const temperatureResult = await temperature;
        console.log(temperatureResult);
    } catch(error) {
        console.log(error);
    }
}

getWeatherReport();