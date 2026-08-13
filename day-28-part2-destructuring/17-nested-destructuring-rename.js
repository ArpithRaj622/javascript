const user = {
    profile : {
        name : "Arpith",
        age : 24
    }
}

const {profile : {name : username, age : userage}} = user;

console.log(username);
console.log(userage);