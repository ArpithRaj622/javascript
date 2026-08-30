const products = [
    { name: "Laptop", price: 50000 },
    { name: "Phone", price: 20000 },
    { name: "Monitor", price: 15000 }
];

const expensiveProducts = products.filter((product) => {
    return product.price > 20000;
});

console.log(expensiveProducts);