const productPrices = [70000, 500, 1500, 12000, 95000, 25000];

let mostExpensiveItem = 0;

for (let i = 0; i < productPrices.length; i++) {
    if (productPrices[i] > mostExpensiveItem) {
        mostExpensiveItem = productPrices[i];
    }
}

console.log(`Most Expensive Item = ₹${mostExpensiveItem}`);