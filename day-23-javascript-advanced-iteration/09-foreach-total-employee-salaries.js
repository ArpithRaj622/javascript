const employees = [
    { name: "Arpith", salary: 50000 },
    { name: "Raj", salary: 60000 },
    { name: "Sam", salary: 40000 },
    { name: "Tom", salary: 30000 }
];

let totalSalary = 0;

employees.forEach((employee) => {
    totalSalary += employee.salary;
});

console.log(totalSalary);