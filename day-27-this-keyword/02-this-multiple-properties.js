const person = {
    name : "Arpith",
    age : 24,
    showDetails() {
        console.log(`${this.name} is ${this.age} years old`);
    }
}

person.showDetails();