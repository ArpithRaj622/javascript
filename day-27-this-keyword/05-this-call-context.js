const person = {
    name : "Arpith", 
    greet() {
        console.log(`Hello ${this.name}`);
    }
}

const anotherPerson = {
    name : "Raj",
}

person.greet.call(anotherPerson);