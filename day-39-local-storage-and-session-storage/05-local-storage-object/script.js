const user = {
    name : "Arpith",
    age : 24,
    city : "Raichur"
}

const jsonUser = JSON.stringify(user);

localStorage.setItem("user", jsonUser);

console.log("User saved");