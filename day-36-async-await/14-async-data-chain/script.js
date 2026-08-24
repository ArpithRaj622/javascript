function getUser() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                name : "Arpith",
                age : 24
            });
        }, 2000);
    });
}

function getGreeting(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Hello ${name}`);
        }, 2000);
    });
}

async function showUserGreeting() {
    const user = getUser();
    const userObj = await user;

    const greet = getGreeting(userObj.name);
    const greetUser = await greet;

    console.log(greetUser);
}

showUserGreeting();