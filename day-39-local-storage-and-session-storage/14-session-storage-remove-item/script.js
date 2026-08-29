let username = "Arpith";

sessionStorage.setItem("username", username);

sessionStorage.removeItem("username");

username = sessionStorage.getItem("username");

console.log(username);