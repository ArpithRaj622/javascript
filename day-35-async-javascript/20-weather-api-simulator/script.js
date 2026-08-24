function getWeather() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Weather : Sunny");
        }, 2000);
    });
}

function getTemperature() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Temperature : 28°C");
        }, 2000);
    });
}

function getHumidity() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Humidity: 65%");
        }, 2000);
    });
}

Promise.all([getWeather(), getTemperature(), getHumidity()
])
    .then((results) => {
        results.forEach((result) => {
            console.log(result);
        })
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("Weather report complete");
    });