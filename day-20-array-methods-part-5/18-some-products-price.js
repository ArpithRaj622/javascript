const products = [
    { name: "Laptop", price: 90000 },
    { name: "Headphones", price: 9000 },
    { name: "Mouse", price: 2000 },
    { name: "PlayStation 5", price: 50000 }
];

const productLessThan5k = products.some((product) => {
    return product.price < 5000;
});

console.log(productLessThan5k);