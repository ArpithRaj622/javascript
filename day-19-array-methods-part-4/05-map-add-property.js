const students = [
    { name: "Arpith", age: 24 },
    { name: "Raj", age: 23 },
    { name: "Sam", age: 25 }
];

const studentsUpdate = students.map((student) => {
    return {
        ...student,
        isAdult : true
    };
});

console.log(studentsUpdate);