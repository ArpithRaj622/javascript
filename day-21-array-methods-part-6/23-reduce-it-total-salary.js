const employees = [
    { name: "Arpith", department: "IT", salary: 50000 },
    { name: "Raj", department: "HR", salary: 40000 },
    { name: "Sam", department: "IT", salary: 60000 },
    { name: "Tom", department: "Finance", salary: 45000 }
];

const ITemployeesTotalSalary = employees.reduce((total, employee) => {
    return employee.department === "IT" ? employee.salary + total : total;
}, 0);

console.log(ITemployeesTotalSalary);