const prices = [100, 250, 50, 400, 150];

const discountedPrices = prices.map((price) => {
    return price - (price * 10/100);
});

console.log(discountedPrices);