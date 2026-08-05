const products = [
    { name: "Laptop", price: 90000 },
    { name: "Headphones", price: 9000 },
    { name: "Mouse", price: 2000 },
    { name: "PlayStation 5", price: 50000 }
];

const expensiveProduct = products.find((product) => {
    return product.price >= 40000;
});

console.log(expensiveProduct);