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

function getHumidity() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Humidity received");
        }, 2000);
    });
}

async function getWeatherReport() {
    const weatherResult = await Promise.all([getWeather(), getTemperature(), getHumidity()]);
    weatherResult.forEach((result) => {
        console.log(result);
    });
}

getWeatherReport();