class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(`Hello ${this.name}`);
    }
}

class Student extends Person {
    constructor(name, course) {
        super(name);
        this.course = course;
    }

    study() {
        console.log(`${this.name} is studying ${this.course}`);
    }
}

const student1 = new Student("Arpith", "BCA");
const student2 = new Student("Raj", "MCA");

student1.greet();
student1.study();
student2.greet();
student2.study();