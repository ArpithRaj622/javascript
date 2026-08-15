class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    get userAge() {
        return this.age;
    }

    set userAge(newAge) {
        if (newAge >= 18) {
            this.age = newAge;
        } else {
            console.log("Age must be 18 or above");
        }
    }
}

const user1 = new User("Arpith", 24);

const age = user1.userAge;

console.log(age);

user1.userAge = 25;
console.log(user1.age);

user1.userAge = 16;

console.log(user1.age);