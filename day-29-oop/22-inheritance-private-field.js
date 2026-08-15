class User {
    #email;
    constructor(name, email) {
        this.name = name;
        this.#email = email;
    }

    getEmail() {
        return this.#email;
    }
}

class Admin extends User {
    constructor(name, email, role) {
        super(name, email);
        this.role = role;
    }
    getAdminDetails() {
        console.log(`${this.name} - ${this.getEmail()} - ${this.role}`);
    }
}

const user1 = new Admin("Arpith", "arpith@gamil.com", "Admin");

user1.getAdminDetails();