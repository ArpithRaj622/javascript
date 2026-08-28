const jsonSkills = localStorage.getItem("skills");

const skills = JSON.parse(jsonSkills);

console.log(skills);

console.log(skills[0]);
console.log(skills[skills.length - 1]);