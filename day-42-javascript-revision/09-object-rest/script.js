const user = {
    name: "Arpith",
    age: 24,
    city: "Raichur",
    role: "Frontend Developer"
};

const {name, ...details} = user;

console.log(name);
console.log(details);