function createUser(username) {

    function showUser() {
        console.log(username);
    }

    return showUser;
}

let user1 = createUser("Arpith");
let user2 = createUser("Raj");

user1();
user2();
