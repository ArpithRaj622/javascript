const productPrices = [70000, 500, 1500, 12000, 95000, 25000];

let cheapestItem = productPrices[0];

for (let i = 0; i < productPrices.length; i++) {
    if (productPrices[i] < cheapestItem) {
        cheapestItem = productPrices[i];
    }
}

console.log(`Cheapest Item = ₹${cheapestItem}`);