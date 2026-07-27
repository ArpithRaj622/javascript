const productPrices = [70000, 500, 1500, 12000, 95000, 25000, 8000, 40000];

let totalPrice = 0;
let averagePrice = 0;

for (let i = 0; i < productPrices.length; i++) {
    totalPrice += productPrices[i];
}

averagePrice = totalPrice/productPrices.length;

console.log(`Average Product Price = ₹${averagePrice}`);