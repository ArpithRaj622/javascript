function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Failed to fetch data");
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
    }
}

showData();