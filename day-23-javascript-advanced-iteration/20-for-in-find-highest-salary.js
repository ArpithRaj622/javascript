const employees = {
    Arpith: { department: "IT", salary: 50000 },
    Raj: { department: "HR", salary: 40000 },
    Sam: { department: "IT", salary: 60000 },
    Tom: { department: "Finance", salary: 45000 }
};

let highestSalary = employees["Arpith"].salary;

for (let employee in employees) {
    if (employees[employee].salary > highestSalary) {
        highestSalary = employees[employee].salary;
    }
}
for (let employee in employees) {
    if (employees[employee].salary === highestSalary) {
        console.log(employee);
    }
}


