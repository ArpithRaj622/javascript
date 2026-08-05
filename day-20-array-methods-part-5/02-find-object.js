const students = [
    { name: "Arpith", age: 24, course: "BCA" },
    { name: "Raj", age: 23, course: "MCA" },
    { name: "Sam", age: 25, course: "BCA" },
    { name: "Tom", age: 22, course: "MBA" }
];

const mcaStudent = students.find((student) => {
    return student.course === "MCA";
});

console.log(mcaStudent);