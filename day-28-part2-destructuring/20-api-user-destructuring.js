function getUserData() {
    return {
        id: 101,
        user: {
            name: "Arpith",
            email: "arpith@gmail.com"
        }
    }
}

const {user : {name, email}} = getUserData();

console.log(name);
console.log(email);