const productPrices = [70000, 500, 1500, 12000, 95000, 25000, 8000, 40000];

let premiumProductCount = 0;

for (let i = 0; i < productPrices.length; i++) {
    if (productPrices[i] >= 20000) {
        premiumProductCount++;
    }
}

console.log(`Premium Products = ${premiumProductCount}`);