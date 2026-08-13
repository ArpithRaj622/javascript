function getSkills() {
    return ["HTML", "CSS", "JavaScript"];
}

const [firstSkill, ,thirdSkill] = getSkills();

console.log(firstSkill);
console.log(thirdSkill);