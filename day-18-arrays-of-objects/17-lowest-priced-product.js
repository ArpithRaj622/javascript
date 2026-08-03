const products = [
    {name : "Laptop", price : 90000, stock : 10},
    {name : "Playstation 5", price : 50000, stock : 20},
    {name : "Headphones", price : 9000, stock : 30},
    {name : "Gaming Chair", price : 20000, stock : 30}
];

let lowestPriceProduct = products[0];

for (const product of products) {
    if (product.price < lowestPriceProduct.price) {
        lowestPriceProduct = product;
    }
}

console.log("Lowest Priced Product:");
console.log(`Name: ${lowestPriceProduct.name}
Price: ${lowestPriceProduct.price}`);