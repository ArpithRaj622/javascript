const personalInfo = {
    name : "Arpith",
    age : 24
};

const contactInfo = {
    city : "Raichur",
    state : "Karnataka"
};

const user = {...personalInfo, ...contactInfo};

console.log(user);