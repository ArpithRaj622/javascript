const products = [
    { name: "Laptop", stock: 10 },
    { name: "Mouse", stock: 0 },
    { name: "Keyboard", stock: 5 },
    { name: "Monitor", stock: 0 },
    { name: "Headphones", stock: 8 }
];

let i = 0;

while (i < products.length) {
    if (products[i].stock === 0) {
        i++;
        continue;
    }
    console.log(products[i].name);
    i++;
}