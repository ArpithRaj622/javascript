class User {
    #password;
    constructor(username, password) {
        this.username = username;
        this.#password = password;
    }

    login(password) {
        if (password === this.#password) {
            console.log("Login successful");
        } else {
            console.log("Invalid password");
        }
    }
}

const user1 = new User("Arpith", "secret123");

user1.login("wrong123");
user1.login("secret123");