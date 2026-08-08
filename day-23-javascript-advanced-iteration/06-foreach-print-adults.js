const employees = [
    { name: "Arpith", age: 24 },
    { name: "Raj", age: 17 },
    { name: "Sam", age: 26 },
    { name: "Tom", age: 16 },
    { name: "Sara", age: 22 }
];

employees.forEach((employee) => {
    if (employee.age >= 18) {
        console.log(employee.name);
    }
});