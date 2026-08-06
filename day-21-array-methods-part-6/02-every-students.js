const students = [
    { name: "Arpith", age: 24 },
    { name: "Raj", age: 23 },
    { name: "Sam", age: 25 },
    { name: "Tom", age: 22 }
];

const allAdults = students.every((student) => {
    return student.age >= 18
});

console.log(allAdults);