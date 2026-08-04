const products = [
    { name: "Laptop", price: 70000 },
    { name: "Phone", price: 30000 },
    { name: "Watch", price: 12000 },
    { name: "Tablet", price: 25000 }
];

const discountedProducts = products.map((product) => {
    return {
        ...product,
        originalPrice : product.price,
        discountedPrice : product.price - (product.price * 10/100)
    };
});

console.log(discountedProducts);