const products = [
    { name: "Laptop", stock: 10 },
    { name: "Headphones", stock: 5 },
    { name: "Mouse", stock: 2 },
    { name: "Keyboard", stock: 15 }
];

const allProductStockTotal = products.reduce((total, product) => {
    return total + product.stock;
}, 0);

console.log(allProductStockTotal);