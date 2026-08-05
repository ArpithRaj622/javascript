const employees = [
    { name: "Arpith", salary: 50000 },
    { name: "Raj", salary: 60000 },
    { name: "Sam", salary: 40000 },
    { name: "Tom", salary: 30000 }
];

const hasSalary55kPlus = employees.some((employee) => {
    return employee.salary > 55000;
});

console.log(hasSalary55kPlus);