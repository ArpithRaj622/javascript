const employees = [
    { name: "Arpith", salary: 50000, experience: 3 },
    { name: "Raj", salary: 40000, experience: 1 },
    { name: "Sam", salary: 60000, experience: 5 },
    { name: "Tom", salary: 45000, experience: 4 },
    { name: "Sara", salary: 70000, experience: 6 }
];

function processEmployees(employees, calculateBonus) {
    employees.forEach((employee) => {
        let bonus = calculateBonus(employee.salary, employee.experience);
        console.log(bonus);
    });
}

function calculateBonus(salary, experience) {
    if (experience >= 3) {
        return salary * 10/100;
    } else {
        return salary * 5/100;
    }
}

processEmployees(employees, calculateBonus);