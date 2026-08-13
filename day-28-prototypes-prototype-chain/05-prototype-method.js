function Person(name) {
    this.name = name;
}

Person.prototype.greet = function () {
    console.log(`Hello ${this.name}`);
}

const person1 = new Person("Arpith");

const person2 = new Person("Raj");

person1.greet();
person2.greet();