class User {
    constructor(name, role = "User") {
        this.name = name;
        this.role = role;
    }
    getRole() {
        console.log(`${this.name} -> ${this.role}`);
    }
}

const person1 = new User("Arpith", "Admin");
const person2 = new User("Raj");

person1.getRole();
person2.getRole();