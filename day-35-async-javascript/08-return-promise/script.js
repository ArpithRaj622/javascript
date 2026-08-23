const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Step 1 completed");
    }, 2000);
});

promise
    .then((result) => {
        console.log(result);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("Step 2 completed")
            }, 2000);
        });
    })
    .then((result) => {
        console.log(result);
    });