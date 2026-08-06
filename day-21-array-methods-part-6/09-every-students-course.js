const students = [
    { name: "Arpith", course: "BCA" },
    { name: "Raj", course: "BCA" },
    { name: "Sam", course: "MBA" },
    { name: "Tom", course: "BCA" }
];

const allAreBcaStdudents = students.every((student) => {
    return student.course === "BCA";
});

console.log(allAreBcaStdudents);