class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    getPrice() {
        console.log(`${this.name} costs ${this.price}`);
    }
}

const laptop = new Product("Laptop", 50000);
const phone = new Product("Phone", 25000);

laptop.getPrice();
phone.getPrice();