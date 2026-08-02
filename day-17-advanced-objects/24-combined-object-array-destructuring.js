const employee = {
    name : "Arpith",
    skills : ["HTML", "CSS", "JavaScript"]
};

const {name, skills : [firstSkill, secondSkill]} = employee;

console.log(name);
console.log(firstSkill);
console.log(secondSkill);
