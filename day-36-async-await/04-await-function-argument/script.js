function getMessage(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Hello ${name}`);
        }, 2000);
    });
}

async function showMessage() {
    const promise = getMessage("Arpith");
    const result = await promise;
    console.log(result);
}

showMessage();