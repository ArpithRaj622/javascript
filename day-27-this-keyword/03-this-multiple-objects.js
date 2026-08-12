const person1 = {
    name : "Arpith",
    greet() {
        console.log(`Hello ${this.name}`);
    }
}

const person2  = {
    name : "Raj",
    greet() {
        console.log(`Hello ${this.name}`);
    }
}

person1.greet();
person2.greet();