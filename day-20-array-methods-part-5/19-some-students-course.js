const students = [
    { name: "Arpith", course: "BCA" },
    { name: "Raj", course: "MCA" },
    { name: "Sam", course: "MBA" },
    { name: "Tom", course: "BBA" }
];

const hasMcaStudent = students.some((student) => {
    return student.course === "MCA";
});

console.log(hasMcaStudent);