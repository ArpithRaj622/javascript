const product = {
    name: "Laptop",
    price: 90000,
    stock: 5,
    rating: 4.5,
    brand: "Lenovo"
};

let count = 0;

for (let key in product) {
    if (typeof product[key] === "number") {
        count++;
    }
}

console.log(count);