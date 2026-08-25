function getWeather() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Weather received");
        }, 3000);
    }); 
}

function getTemperature() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Temperature received");
        }, 1000);
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
    const result = await Promise.race([getWeather(), getTemperature(), getHumidity()]);

    console.log(result);
}

getWeatherReport();