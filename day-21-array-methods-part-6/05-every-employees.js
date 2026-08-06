const employees = [
    { name: "Arpith", salary: 50000 },
    { name: "Raj", salary: 60000 },
    { name: "Sam", salary: 40000 },
    { name: "Tom", salary: 30000 }
];

const allEmployees25kPlus = employees.every((employee) => {
    return employee.salary > 25000;
});

console.log(allEmployees25kPlus);