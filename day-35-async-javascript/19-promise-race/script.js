function getWeather() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Weather received");
        }, 3000);
    });
}

function getTemperature() {
    return new Promise((resolve, rejec) => {
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

Promise.race([getWeather(), getTemperature(), getHumidity()
])
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    }); 
