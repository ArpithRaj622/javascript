async function getMessage() {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Message received");
        }, 2000);
    });
    const result = await promise;

    console.log(result);
}

getMessage();