const products = [
    { name: "Laptop", price: 60000 },
    { name: "Phone", price: 25000 },
    { name: "Mouse", price: 1500 },
    { name: "Monitor", price: 12000 },
    { name: "Keyboard", price: 3000 }
];

const productsabove10k = products.filter((product) => {
    return product.price > 10000;
});

const expensiveProducts = productsabove10k.map((product) => {
    return product.name;
});

console.log(expensiveProducts);