const products = [
    { name: "Laptop", price: 60000, inStock: true },
    { name: "Mouse", price: 800, inStock: true },
    { name: "Keyboard", price: 1500, inStock: false },
    { name: "Monitor", price: 12000, inStock: true },
    { name: "Headphones", price: 2500, inStock: false }
];

const availableProducts = products.filter((product) => {
    return product.price >= 1000 && product.inStock;
});

console.log(availableProducts);