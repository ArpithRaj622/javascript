const user = {
    name : "Arpith",
    age : 24,
    city : "Bengaluru",
    role : "Frontend Developer"
}

const {name, ...details} = user;

console.log(name);
console.log(details);