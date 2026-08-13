const user = {
    name : "Arpith",
    age : 24
}

const {name, city = "Bengaluru"} = user;

console.log(`${name}
${city}`);