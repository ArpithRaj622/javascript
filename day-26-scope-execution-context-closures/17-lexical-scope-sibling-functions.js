function createUser() {
    let username = "Arpith";

    function showUsername() {
        console.log(username);
    }

    function greetUser() {
        console.log(`Hello ${username}`);
    }

    showUsername();
    greetUser();
}

createUser();