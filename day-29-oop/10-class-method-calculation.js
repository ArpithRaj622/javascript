class Product {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    getTotal() {
        return this.price * this.quantity;
    }
}

const laptop = new Product("Laptop", 50000, 2);

const total = laptop.getTotal();

console.log(total);