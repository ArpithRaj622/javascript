function Person(name) {
    this.name = name;
}

Person.prototype.greet = function () {
    
}

const person1 = new Person();
const person2 = new Person();

console.log(person1.greet === person2.greet);