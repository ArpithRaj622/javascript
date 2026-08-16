class Product {
    constructor(name, price, stock) {
        this.name = name;
        this.price = price;
        this.stock = stock;
    }

    productDetails() {
        console.log(`${this.name} - Price: ${this.price} - Stock: ${this.stock}`);
    }

    purchaseProduct() {
        this.stock--;
    }
}

class Cart {
    constructor() {
        this.products = [];
    }

    addProduct(product) {
        this.products.push(product);
    }

    removeProduct(product) {
        this.products.splice(this.products.indexOf(product), 1);
    }

    getTotal() {
        let totalPrice = this.products.reduce((total, product) => {
            return total + product.price;
        }, 0);

        return totalPrice;
    }

    displayCart() {
        this.products.forEach((product) => {
            console.log(product.name);
            console.log(product.price);
        });

        console.log(this.getTotal());
    }
}

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.cart = new Cart();
    }

    addProduct(product) {
        this.cart.addProduct(product);
    }

    removeProduct(product) {
        this.cart.removeProduct(product);
    }

    checkout() {
        let total = this.cart.getTotal();
        console.log(`Pay : ${total}`);
    }
}

class PremiumUser extends User {
    constructor(name, email) {
        super(name, email);
        this.discount = 10;
    }

    checkout() {
        let total = this.cart.getTotal();
        let discount = total * (this.discount / 100);
        let finalPrice = total - discount;
        console.log(`Pay : ${finalPrice}`);
    }
}

const laptop = new Product("Laptop", 60000, 5);
const wirelessMouse = new Product("Wireless Mouse", 1500, 10);
const mechanicalKeyboard = new Product("Mechanical Keyboard", 3500, 7);

const user1 = new User("Arpith", "arpith@gmail.com");

const user2 = new PremiumUser("Raj", "raj@gmail.com");

user1.addProduct(laptop);
user1.addProduct(wirelessMouse);

user2.addProduct(laptop);
user2.addProduct(mechanicalKeyboard);

// user1.cart.displayCart();
// user2.cart.displayCart();

user1.checkout();
user2.checkout();