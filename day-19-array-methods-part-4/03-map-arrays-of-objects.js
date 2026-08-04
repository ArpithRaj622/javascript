const students = [
    { name: "Arpith", age: 24 },
    { name: "Raj", age: 23 },
    { name: "Sam", age: 25 }
];

const studentNames = students.map((student) => {
    return student.name;
});

console.log(studentNames);