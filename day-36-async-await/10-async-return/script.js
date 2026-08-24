function getNumber() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(10);
        }, 2000);
    });
}

async function calculator() {
    const num = getNumber();
    const numReceived = await num;
    return numReceived * 2;
}

calculator()
    .then((result) => {
        console.log(result);
    });