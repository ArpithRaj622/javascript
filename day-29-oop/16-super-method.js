class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(`Hello ${this.name}`);
    }
}

class Student extends Person {
    greet() {
        super.greet();
        console.log(`${this.name} is a student`);
    }
}

const person1 = new Student("Arpith");

person1.greet();