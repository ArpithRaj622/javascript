const user = {
    name : "Arpith",
    age : 24
};

const {name, city = "Raichur"} = user;

console.log(name);
console.log(city);