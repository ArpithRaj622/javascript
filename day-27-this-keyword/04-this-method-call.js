const user = {
    name : "Arpith",
    greet() {
        console.log(`Hello ${this.name}`);
    }
}

const  x = user.greet;

x();