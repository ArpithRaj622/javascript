function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data received");
        }, 2000);
    });
}

async function showData() {
    try {
        const data = getData();
        const dataResult = await data;

        console.log(dataResult);
    } catch(error) {
        console.log(error);
    } finally {
        console.log("Operation finished");
    }
}

showData();