const product = {
    name: "Laptop",
    brand: "Lenovo",
    price: 90000,
    stock: 5
};

for (let key in product) {
    console.log(`${key} : ${product[key]}`);
}