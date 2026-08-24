function getMessage() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Message received");
        }, 2000);
    });
}

async function showMessage() {
    const promise = getMessage();
    const result = await promise;
    console.log(result);
}

showMessage();