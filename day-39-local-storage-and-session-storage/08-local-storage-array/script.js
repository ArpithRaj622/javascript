const skills = ["HTML", "CSS", "JavaScript"];

const jsonSkills = JSON.stringify(skills);

localStorage.setItem("skills", jsonSkills);

console.log("Skills saved");