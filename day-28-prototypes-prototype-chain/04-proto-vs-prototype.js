function Person() {

}

console.log(Person.prototype);

const person1 = new Person();

console.log(person1.__proto__);

console.log(Person.prototype === person1.__proto__);