const stockOfProducts = [10, 0, 5, 0, 18, 7, 0, 25];

let stockOutProductsCount = 0;

for (let i = 0; i < stockOfProducts.length; i++) {
    if (stockOfProducts[i] === 0) {
        stockOutProductsCount++;
    }
}

console.log(`Out of Stock Products = ${stockOutProductsCount}`);