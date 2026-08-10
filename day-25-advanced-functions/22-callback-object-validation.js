const products = [
    { name: "Laptop", price: 90000, stock: 5 },
    { name: "Mouse", price: 2000, stock: 0 },
    { name: "Keyboard", price: 3500, stock: 10 },
    { name: "Monitor", price: 15000, stock: 3 },
    { name: "Phone", price: 60000, stock: 0 }
];

function checkProducts(products, isAvailable) {
    products.forEach((product) => {
        let available = isAvailable(product.stock);
        if (available) {
            console.log(product.name);
        }
    });
}

function isAvailable(stock) {
    if (stock > 0) {
        return true;
    } else {
        return false;
    }
}

checkProducts(products, isAvailable);