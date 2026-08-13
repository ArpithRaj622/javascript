function User(username, email) {
    this.username = username;
    this.email = email;
}

User.prototype.getProfile = function () {
    console.log(`${this.username} - ${this.email}`);
}

const user1 = new User("Arpith", "arpith@gmail.com");
const user2 = new User("Raj", "raj@gamil.com");

user1.getProfile();
user2.getProfile();

console.log(user1.getProfile === user2.getProfile);