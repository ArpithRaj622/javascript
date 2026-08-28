localStorage.setItem("username", "Arpith");
localStorage.setItem("city", "Raichur");
localStorage.setItem("age", "24");

localStorage.clear();

const name = localStorage.getItem("username");
const city = localStorage.getItem("city");

console.log(name);
console.log(city);