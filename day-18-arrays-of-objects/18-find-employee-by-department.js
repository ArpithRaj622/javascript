const employees = [
    { name: "Arpith", department: "Development", salary: 50000 },
    { name: "Raj", department: "Engineering", salary: 60000 },
    { name: "Sam", department: "Marketing", salary: 40000 },
    { name: "Tom", department: "Sales", salary: 30000 }
];

const deptToFind = "Marketing";

for (const employee of employees) {
    if (employee.department === deptToFind) {
        console.log(`Name: ${employee.name}`);
        console.log(`Salary: ${employee.salary}`);
    }
}