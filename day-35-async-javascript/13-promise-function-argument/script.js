function getWeather(city) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Weather data received for ${city}`);
        }, 2000);
    });
}

getWeather("Bengaluru")
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    })