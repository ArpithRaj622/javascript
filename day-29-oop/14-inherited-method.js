class Vehicle {
    constructor(brand) {
        this.brand = brand;
    }

    start() {
        console.log(`${this.brand} is starting`);
    }
}

class Car extends Vehicle {
    constructor(brand, model) {
        super(brand);
        this.model = model;
    }

    drive() {
        console.log(`${this.brand} ${this.model} is driving`);
    }
}

const car1 = new Car("Toyota", "Corolla");
const car2 = new Car("Honda", "Civic");

car1.start();
car1.drive();
car2.start();
car2.drive();