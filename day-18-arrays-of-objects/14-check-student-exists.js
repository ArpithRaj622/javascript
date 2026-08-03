const students = [
    {name: "Arpith", age: 24, course: "BCA"},
    {name: "Raj", age: 23, course: "BCA"},
    {name: "Arpith Raj", age: 26, course: "MCA" },
    {name : "Kiran", age: 22, course: "BCA"}
];

let studentsExists = false;

for (const student of students) {
    if (student.name === "Kiran") {
        studentsExists = true;
    }
}

if (studentsExists) {
    console.log("Student Found");
} else {
    console.log("Student Not Found");
}