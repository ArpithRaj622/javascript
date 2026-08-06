const products = [
    { name: "Laptop", price: 90000 },
    { name: "Headphones", price: 9000 },
    { name: "Mouse", price: 2000 },
    { name: "PlayStation 5", price: 50000 }
];

const lowestPrice = products.reduce((lowest, product) => {
    return product.price < lowest ? product.price : lowest;
}, products[0].price);

console.log(lowestPrice);