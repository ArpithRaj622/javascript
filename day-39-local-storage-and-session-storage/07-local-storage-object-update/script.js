let jsonUser = localStorage.getItem("user");

let user = JSON.parse(jsonUser);

user.age = 25;
user.city = "Bengaluru";

jsonUser = JSON.stringify(user);

localStorage.setItem("user", jsonUser);

jsonUser = localStorage.getItem("user");

user = JSON.parse(jsonUser);

console.log(user);