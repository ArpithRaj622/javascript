const students = [
    { name: "Arpith", marks: 92, passed: true },
    { name: "Raj", marks: 34, passed: false },
    { name: "Sam", marks: 67, passed: true },
    { name: "Tom", marks: 49, passed: false },
    { name: "Sara", marks: 81, passed: true }
];

const passedStudents = students.filter((student) => {
    return student.passed && student.marks >= 60;
});

console.log(passedStudents);