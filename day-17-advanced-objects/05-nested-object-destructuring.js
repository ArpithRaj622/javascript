const employee = {
    name : "Arpith",
    address : {
        city : "Raichur",
        state : "Karnataka"
    }
};

const {name, address : {city}} = employee;

console.log(name);
console.log(city);