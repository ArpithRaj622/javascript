const product = {
    name: "Laptop",
    brand: "Lenovo",
    price: 90000,
    stock: 5
};

let isAvailable = false;

for (let key in product) {
    if (key === "price") {
        isAvailable = true;
        break;
    }
}

if(isAvailable) {
    console.log("Price is available");
} else {
    console.log("Price is not available");
}