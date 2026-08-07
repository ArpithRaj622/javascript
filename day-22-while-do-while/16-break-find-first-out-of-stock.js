const products = [
    { name: "Laptop", stock: 10 },
    { name: "Mouse", stock: 5 },
    { name: "Keyboard", stock: 0 },
    { name: "Headphones", stock: 8 },
    { name: "Monitor", stock: 0 }
];

let i = 0;

while (i < products.length) {
    if (products[i].stock === 0) {
        console.log(products[i].name);
        break;
    }
    i++;
}