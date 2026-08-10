const employees = [
    { name: "Arpith", salary: 50000 },
    { name: "Raj", salary: 60000 },
    { name: "Sam", salary: 40000 },
    { name: "Tom", salary: 70000 }
];

function processEmployee(employees, getAnnualSalary) {
    employees.forEach((employee) => {
        console.log(getAnnualSalary(employee.salary));
    });
}

function getAnnualSalary(salary) {
    return salary * 12;
}

processEmployee(employees, getAnnualSalary);