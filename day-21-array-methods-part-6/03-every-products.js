const products = [
    { name: "Laptop", stock: 10 },
    { name: "Headphones", stock: 5 },
    { name: "Mouse", stock: 2 },
    { name: "Keyboard", stock: 15 }
];

const allProductsInStock = products.every((product) => {
    return product.stock > 0;
});

console.log(allProductsInStock);