const employees = {
    Arpith: { department: "IT", salary: 50000 },
    Raj: { department: "HR", salary: 40000 },
    Sam: { department: "IT", salary: 60000 },
    Tom: { department: "Finance", salary: 45000 }
};

let ITemployeeTotalSalary = 0;

for (let employee in employees) {
    if (employees[employee].department === "IT") {
        ITemployeeTotalSalary += employees[employee].salary;
    }
}

console.log(ITemployeeTotalSalary);