const jsonUser = localStorage.getItem("user");

const user = JSON.parse(jsonUser);

console.log(user.name);
console.log(user.age);
console.log(user.city);