const product = {
    name: "Laptop",
    brand: "Lenovo",
    price: 90000,
    stock: 5,
    category: "Electronics"
};

for (let key in product) {
    if (typeof product[key] === "string") {
        console.log(product[key]);
    }
}