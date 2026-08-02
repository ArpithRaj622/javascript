const product = {
    name : "Laptop",
    price : 65000,
    brand : "Lenovo"
};

const {name, price : productPrice, color = "black"} = product;

console.log(name);
console.log(productPrice);
console.log(color);