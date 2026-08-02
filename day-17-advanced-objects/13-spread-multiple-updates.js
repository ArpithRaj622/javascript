const employee = {
    name : "Arpith",
    department : "Engineering"
};

const updatedEmployee = {
    ...employee,
    department : "Development",
    salary : 50000
};

console.log(updatedEmployee);