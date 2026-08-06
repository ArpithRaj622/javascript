const students = [
    { name: "Arpith", age: 24 },
    { name: "Raj", age: 23 },
    { name: "Sam", age: 25 },
    { name: "Tom", age: 22 }
];

const sumUpstudentsAge = students.reduce((total, student) => {
    return total + student.age;
}, 0);

console.log(sumUpstudentsAge);