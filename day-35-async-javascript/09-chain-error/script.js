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
                reject("Step 2 failed");
            }, 2000);
        });
    })
    .catch((error) => {
        console.log(error);
    }); 