class Student {
    constructor(name, age, course) {
        this.name = name;
        this.age = age;
        this.course = course;
    }
    getdetails() {
        console.log(`${this.name}, ${this.age}, ${this.course}`);
    }
}

const student1 = new Student("Arpith", 24, "BCA");
const student2 = new Student("Raj", 23, "MCA");

student1.getdetails();
student2.getdetails();