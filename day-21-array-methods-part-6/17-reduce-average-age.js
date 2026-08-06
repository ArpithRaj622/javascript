const students = [
    { name: "Arpith", age: 24 },
    { name: "Raj", age: 23 },
    { name: "Sam", age: 25 },
    { name: "Tom", age: 22 }
];

const total = students.reduce((total, student) => {
    return total + student.age / students.length;
}, 0);

console.log(averageStudentAge);