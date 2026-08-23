function getWeather() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Weather data received");
        }, 2000);
    });
}

getWeather()
    .then((result) =>{
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });