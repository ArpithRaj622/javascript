const products = [
    { name: "Laptop", stock: 10 },
    { name: "Headphones", stock: 5 },
    { name: "Mouse", stock: 0 },
    { name: "Keyboard", stock: 15 }
];

const stockOutProduct = products.find((product) => {
    return product.stock === 0;
});

console.log(stockOutProduct);