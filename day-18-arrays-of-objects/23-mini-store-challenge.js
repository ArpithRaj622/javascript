const products = [
    {name : "Laptop", price : 90000, stock : 10},
    {name : "Playstation 5", price : 50000, stock : 20},
    {name : "Headphones", price : 9000, stock : 30},
    {name : "Gaming Chair", price : 20000, stock : 30}
];

let productsInStock = 0;
let mostExpensiveProduct = products[0];
let lowestPricedProduct = products[0];
let inventoryValue = 0;

for (const product of products) {
    if (product.stock > 0) {
        productsInStock++;
    }
    if (product.price > mostExpensiveProduct.price) {
        mostExpensiveProduct = product;
    }
    if (product.price < lowestPricedProduct.price) {
        lowestPricedProduct = product;
    }
    inventoryValue += (product.price * product.stock);
}

console.log(`Total number of Products: ${products.length}
`);

console.log(`Products in Stock: ${productsInStock}
`);

console.log(`Most Expensive Product:
Name: ${mostExpensiveProduct.name}
Price: ${mostExpensiveProduct.price}`);

console.log();

console.log(`Lowest-Priced Product:
Name: ${lowestPricedProduct.name}
Price: ${lowestPricedProduct.price}`);

console.log();

console.log(`Total Inventory Value: ${inventoryValue}`);