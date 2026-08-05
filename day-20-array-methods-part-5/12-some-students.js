const students = [
    { name: "Arpith", age: 24 },
    { name: "Raj", age: 17 },
    { name: "Sam", age: 25 },
    { name: "Tom", age: 16 }
];

const hasMinorStudent = students.some((student) => {
    return student.age < 18;
});

console.log(hasMinorStudent);