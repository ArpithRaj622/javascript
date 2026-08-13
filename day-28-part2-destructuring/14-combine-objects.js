const person = { name: "Arpith" };
const details = { age: 24, city: "Bengaluru" };

const profile = {...person, ...details};

console.log(profile);