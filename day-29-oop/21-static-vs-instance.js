class User {
    constructor(name) {
        this.name = name;
    }

    greet() {
        return `Hello ${this.name}`;
    }

    static role() {
        return "Frontend Developer";
    }
}

const user1 = new User("Arpith");

const greet = user1.greet();

const role = User.role();

console.log(greet);
console.log(role);