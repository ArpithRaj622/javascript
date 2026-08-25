function getweather() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Weather received");
        }, 3000);
    });
}

function getTemperature() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Temperature unavailable");
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

async function getFasterData() {
    try {
        const result  = await Promise.race([getweather(), getTemperature(), getHumidity()]);

        console.log(result);
    } catch(error) {
        console.log(error);
    }
}

getFasterData();
