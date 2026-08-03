const students = [
    {name: "Arpith", age: 24, course: "BCA"},
    {name: "Raj", age: 23, course: "BCA"},
    {name: "Arpith Raj", age: 26, course: "MCA" }
];

for (const student of students) {
    if (student.name === "Raj") {
        console.log(student.name);
        console.log(student.age);
        console.log(student.course);
    }    
}
