const students = [
    {name: "Arpith", age: 24, course: "BCA"},
    {name: "Raj", age: 23, course: "BCA"},
    {name: "Arpith Raj", age: 26, course: "MCA" }
];

for (let i = 0; i < students.length; i++) {
    if (students[i].name === "Raj") {
        students.splice(i, 1);
    }
}

console.log(students);