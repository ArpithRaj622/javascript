const students = [
    {name: "Arpith", age: 24, course: "BCA"},
    {name: "Raj", age: 23, course: "BCA"},
    {name: "Arpith Raj", age: 26, course: "MCA" },
    {name : "Kiran", age: 22, course: "BCA"}
];

let totalStudentAge = 0;
let averageStudentAge = 0;

for (const student of students) {
    totalStudentAge += student.age;
}

averageStudentAge = totalStudentAge/students.length;

console.log(averageStudentAge);