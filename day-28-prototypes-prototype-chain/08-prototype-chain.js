function Person() {

}

const person1 = new Person();

console.log(person1.__proto__ === Person.prototype);

console.log(Person.prototype.__proto__ === Object.prototype);

console.log(Object.prototype.__proto__ === null);