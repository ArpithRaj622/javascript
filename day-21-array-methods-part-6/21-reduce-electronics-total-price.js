const products = [
    { name: "Laptop", category: "Electronics", price: 90000 },
    { name: "Headphones", category: "Electronics", price: 9000 },
    { name: "Chair", category: "Furniture", price: 7000 },
    { name: "Table", category: "Furniture", price: 12000 }
];

const electronicsTotalPrice = products.reduce((total, product) => {
    return product.category === "Electronics" ? product.price + total : total;
}, 0);

console.log(electronicsTotalPrice);