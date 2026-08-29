const username = "Arpith";
const city = "Raichur";
const job = "Frontend Developer";


localStorage.setItem("username", username);
localStorage.setItem("city", city);
localStorage.setItem("job", job);

const count = localStorage.length;

console.log(count);