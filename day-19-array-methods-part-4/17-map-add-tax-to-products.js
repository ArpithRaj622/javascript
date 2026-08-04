const products = [
    { name: "Laptop", price: 70000 },
    { name: "Phone", price: 30000 },
    { name: "Watch", price: 12000 },
    { name: "Tablet", price: 25000 }
];

const taxedProducts = products.map((product) => {
    const tax = product.price * 18/100;
    return {
        ...product,
        taxAmount : tax,
        finalPrice : product.price + tax
    };
});

console.log(taxedProducts);