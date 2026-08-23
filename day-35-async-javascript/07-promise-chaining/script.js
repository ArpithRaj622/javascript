const promise = new Promise((resolve, rejsect) => {
    setTimeout(() => {
        resolve("Step 1 completed");
    }, 2000);
});

promise
    .then((result) => {
        console.log(result);
        return "Step 2 completed";
    })
    .then((result) => {
        console.log(result);
    });