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

function getHumidity() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Humidity received");
        }, 2000);
    });
}

async function getWeatherReport() {
    try {
        const results = await Promise.all([getWeather(), getTemperature(), getHumidity()]);
        
        results.forEach((result) => {
            console.log(result);
        });
    } catch(error) {
        console.log(error);
    }
}

getWeatherReport();