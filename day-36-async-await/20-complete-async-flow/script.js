function getUser() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                name : "Arpith"
            });
        }, 1000);
    });
}

function getWeather(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Weather for ${name}`);
        }, 2000);
    });
}

function getTemperature(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Temperature for ${name}`);
        }, 2000);
    });
}

async function getReport() {
    try {
        const user = await getUser();
        const results = await Promise.all([getWeather(user.name), getTemperature(user.name)]);

        results.forEach((result) => {
            console.log(result);
        });

    } catch(error) {
        console.log(error);
    }
    return "Report Complete";
}

getReport()
    .then((result) => {
        console.log(result);
    });