function getWeather(city) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`${city}`);
        }, 2000);
    });
}

function getTemperature(city) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Temperature in Bengaluru: 28°C`);
        }, 2000);
    });
}

getWeather("Bengaluru")
    .then((result) => {
        console.log(result);
        return getTemperature(result);
    })
    .then((result) => {
        console.log(result);
    });