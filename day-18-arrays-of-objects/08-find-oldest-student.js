const students = [
    {name: "Arpith", age: 24, course: "BCA"},
    {name: "Raj", age: 23, course: "BCA"},
    {name: "Arpith Raj", age: 26, course: "MCA" }
];

let oldestAge = 0;

for (const student of students) {
    if (student.age > oldestAge) {
        oldestAge = student.age;
    }
}

for (const student of students) {
    if (student.age === oldestAge) {
        console.log(student.name);
        console.log(student.age);
    }
}