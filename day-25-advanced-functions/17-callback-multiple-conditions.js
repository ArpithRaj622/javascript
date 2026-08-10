const employees = [
    { name: "Arpith", age: 24, salary: 50000 },
    { name: "Raj", age: 17, salary: 60000 },
    { name: "Sam", age: 26, salary: 40000 },
    { name: "Tom", age: 21, salary: 70000 },
    { name: "Sara", age: 30, salary: 55000 }
];

function findEligibleEmployees(employees, isEligible) {
    employees.forEach((employee) => {
        let eligible = isELigible(employee.age, employee.salary);
        if (eligible) {
            console.log(employee.name);
        }
    });
}

function isELigible(age, salary) {
    if (age >= 18 && salary >= 50000) {
        return true;
    } else {
        return false;
    }
}

findEligibleEmployees(employees, isELigible);