const products = [
    { name: "Laptop", price: 90000 },
    { name: "Headphones", price: 9000 },
    { name: "Mouse", price: 2000 },
    { name: "PlayStation 5", price: 50000 }
];

const totalPrice = products.reduce((total, product) => {
    return total + product.price;
}, 0);

console.log(totalPrice);