const students = [
    { name: "Arpith", course: "BCA" },
    { name: "Raj", course: "MCA" },
    { name: "Sam", course: "BCA" },
    { name: "Tom", course: "MBA" },
    { name: "Sara", course: "BCA" }
];

const bcaStudentCount = students.reduce((count, student) => {
    if (student.course === "BCA") {
        count++;
    } 
    return count;
}, 0);

console.log(bcaStudentCount);