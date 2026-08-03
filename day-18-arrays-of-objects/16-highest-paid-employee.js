const employees = [
    {name : "Arpith", department : "Development", salary : 50000},
    {name : "Raj", department : "Engineering", salary : 60000},
    {name : "Sam", department : "Marketing", salary : 40000},
    {name : "Tom", department : "Sales", salary : 30000}
];

let highestSalary = employees[0].salary;

let highestPaidemployee = employees[0];

for (const employee of employees) {
    if (employee.salary > highestSalary) {
        highestSalary = employee.salary;
        highestPaidemployee = employee; 
    }
}

console.log(`Name: ${highestPaidemployee.name}`);
console.log(`Salary: ${highestPaidemployee.salary}`);