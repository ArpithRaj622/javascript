function getWeather() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomNum = Math.random();
            if (randomNum > 0.5) {
                resolve("Weather data received");
            } else {
                reject("Failed to fetch weather data");
            }
        }, 2000);
    });
}

getWeather()
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });