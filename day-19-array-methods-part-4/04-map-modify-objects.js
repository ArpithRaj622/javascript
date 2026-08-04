const products = [
    { name: "Laptop", price: 90000 },
    { name: "Headphones", price: 9000 },
    { name: "Mouse", price: 2000 }
];

const productsUpdated = products.map((product) => {
    return {
        ...product,
        price: product.price + (product.price * 10/100)

    };
});

console.log(productsUpdated);