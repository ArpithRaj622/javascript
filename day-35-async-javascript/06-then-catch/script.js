const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Task Completed!");
    }, 2000);
});

promise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });