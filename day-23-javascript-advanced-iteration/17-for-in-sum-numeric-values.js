const product = {
    name: "Laptop",
    price: 90000,
    stock: 5,
    rating: 4.5,
    brand: "Lenovo"
};

let sumofNumericValues = 0;

for (let key in product) {
    if (typeof product[key] === "number") {
        sumofNumericValues += product[key];
    }
}

console.log(sumofNumericValues);