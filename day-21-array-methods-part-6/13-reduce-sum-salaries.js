const employees = [
    { name: "Arpith", salary: 50000 },
    { name: "Raj", salary: 60000 },
    { name: "Sam", salary: 40000 },
    { name: "Tom", salary: 30000 }
];

const salarySumUp = employees.reduce((total, employee) => {
    return total + employee.salary;
}, 0);

console.log(salarySumUp);