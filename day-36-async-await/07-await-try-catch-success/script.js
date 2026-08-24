function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data received");
        }, 2000);
    });
}

async function showData() {
    const data = getData();
    try {
        const dataResult = await data;
        console.log(dataResult);
    } catch(error) {
        console.log(error);
    }
}

showData();