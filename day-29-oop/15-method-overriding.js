class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a sound`);
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name);
    }

    speak() {
        console.log(`${this.name} barks`);
    }
}

class Cat extends Animal {
    constructor(name) {
        super(name);
    }

    speak() {
        console.log(`${this.name} meows`);
    }
}

const dog = new Dog("Bruno");
const cat = new Cat("Milo");

dog.speak();
cat.speak();