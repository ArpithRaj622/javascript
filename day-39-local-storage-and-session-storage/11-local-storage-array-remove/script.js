let jsonSkills = localStorage.getItem("skills");

let skills = JSON.parse(jsonSkills);

skills.splice(skills.indexOf("CSS"), 1);

jsonSkills = JSON.stringify(skills);

localStorage.setItem("skills", jsonSkills);

jsonSkills = localStorage.getItem("skills");

skills = JSON.parse(jsonSkills);

console.log(skills);
