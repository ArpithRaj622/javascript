const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Task failed!");
    }, 2000);
});

promise.catch((result) => {
    console.log(result);
});