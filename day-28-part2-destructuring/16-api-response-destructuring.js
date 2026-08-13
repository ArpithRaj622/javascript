const response = {
    success: true,
    data: {
        username: "Arpith",
        email: "arpith@gmail.com"
    }
}

const {data : {username, email}} = response;

console.log(username);
console.log(email);