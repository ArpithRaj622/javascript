let user = {
    name : "Arpith",
    age : 24,
    city : "Raichur"
};

let jsonUser = JSON.stringify(user);

sessionStorage.setItem("user", jsonUser);

console.log("User saved");