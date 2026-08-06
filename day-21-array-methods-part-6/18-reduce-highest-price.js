const products = [
    { name: "Laptop", price: 90000 },
    { name: "Headphones", price: 9000 },
    { name: "Mouse", price: 2000 },
    { name: "PlayStation 5", price: 50000 }
];

const highestPrice = products.reduce((highest, product) => {
    return product.price > highest ? product.price : highest;
}, 0);

console.log(highestPrice);