async function  getMessage() {
    return "Hello from async function";
}

getMessage()
    .then((result) => {
        console.log(result);
    });