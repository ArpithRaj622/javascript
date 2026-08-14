class Person {
    constructor (name) {
        this.name = name;
    }

    greet() {
        console.log(`Hello ${this.name}`);
    }
}

const person1 = new Person("Arpith");
const person2 = new Person("Raj");

person1.greet();
person2.greet();