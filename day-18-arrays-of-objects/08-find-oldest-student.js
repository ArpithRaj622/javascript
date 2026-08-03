const students = [
    {name: "Arpith", age: 24, course: "BCA"},
    {name: "Raj", age: 23, course: "BCA"},
    {name: "Arpith Raj", age: 26, course: "MCA" }
];

let oldestStudent = students[0];

for (const student of students) {
    if (student.age > oldestStudent.age) {
        oldestStudent = student;
    }
}

console.log(oldestStudent.name);
console.log(oldestStudent.age);