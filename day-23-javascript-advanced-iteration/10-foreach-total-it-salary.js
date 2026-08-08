const employees = [
    { name: "Arpith", department: "IT", salary: 50000 },
    { name: "Raj", department: "HR", salary: 40000 },
    { name: "Sam", department: "IT", salary: 60000 },
    { name: "Tom", department: "Finance", salary: 45000 },
    { name: "Sara", department: "IT", salary: 55000 }
];

let ITemployeeTotalSalary = 0;

employees.forEach((employee) => {
    if (employee.department === "IT") {
        ITemployeeTotalSalary += employee.salary;
    }
});

console.log(ITemployeeTotalSalary);