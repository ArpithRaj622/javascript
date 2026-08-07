const students = [
    { name: "Arpith", marks: 85 },
    { name: "Raj", marks: 42 },
    { name: "Sam", marks: 76 },
    { name: "Tom", marks: 35 },
    { name: "Sara", marks: 91 }
];

let i = 0;

while (i < students.length) {
    if (students[i].marks < 50) {
        i++;
        continue;
    }
    console.log(students[i].name);
    i++;
}