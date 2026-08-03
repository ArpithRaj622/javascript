const products = [
    {name : "Laptop", price : 90000, stock : 10},
    {name : "Playstation 5", price : 50000, stock : 20},
    {name : "Headphones", price : 9000, stock : 30},
    {name : "Gaming Chair", price : 20000, stock : 30}
];

let productsInStock = 0;

for (const product of products) {
    if (product.stock > 0) {
        productsInStock++;
    }
}

console.log(`Products in stock : ${productsInStock}`);