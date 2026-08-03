const students = [
    {name: "Arpith", age: 24, course: "BCA"},
    {name: "Raj", age: 23, course: "BCA"},
    {name: "Arpith Raj", age: 26, course: "MCA" },
    {name : "Kiran", age: 22, course: "BCA"}
];

for (const student of students) {
    if (student.course === "MCA") {
        console.log(`Name: ${student.name}`);
        console.log(`Age: ${student.age}`);
    }
}