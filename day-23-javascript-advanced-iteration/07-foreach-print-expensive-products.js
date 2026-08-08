const products = [
    { name: "Laptop", price: 90000 },
    { name: "Mouse", price: 2000 },
    { name: "Monitor", price: 15000 },
    { name: "Keyboard", price: 3500 },
    { name: "Phone", price: 60000 }
];

products.forEach((product) => {
    if (product.price > 10000) {
        console.log(product.name);
    }
});