const employees = [
    { name: "Arpith", salary: 50000 },
    { name: "Raj", salary: 60000 },
    { name: "Sam", salary: 40000 },
    { name: "Tom", salary: 30000 }
];

const employeeBelow45k = employees.find((employee) => {
    return employee.salary < 45000;
});

console.log(employeeBelow45k);