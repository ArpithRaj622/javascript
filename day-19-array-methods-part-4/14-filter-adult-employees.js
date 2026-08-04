const employees = [
    { name: "Arpith", age: 24, department: "IT" },
    { name: "Raj", age: 17, department: "HR" },
    { name: "Sam", age: 30, department: "IT" },
    { name: "Tom", age: 19, department: "Finance" },
    { name: "Sara", age: 16, department: "IT" }
];

const adultEmployees = employees.filter((employee) => {
    return employee.age >= 18 && employee.department === "IT";
});

console.log(adultEmployees);