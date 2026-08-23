const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Task completed!");
    }, 2000);
});

promise
    .then((result) => {
        console.log(result);
    })
    .finally(() => {
        console.log("Task finished!");
    });