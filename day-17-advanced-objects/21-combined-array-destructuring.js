const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js"];

const [firstSkill, , thirdSkill, ...otherSkills] = skills;

console.log(firstSkill);
console.log(thirdSkill);
console.log(otherSkills);