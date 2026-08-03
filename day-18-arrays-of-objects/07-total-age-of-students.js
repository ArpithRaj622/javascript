const students = [
    {name: "Arpith", age: 24, course: "BCA"},
    {name: "Raj", age: 23, course: "BCA"},
    {name: "Arpith Raj", age: 26, course: "MCA" }
];

let totalAge = 0;

for (const student of students) {
    totalAge += student.age
}

console.log(totalAge);