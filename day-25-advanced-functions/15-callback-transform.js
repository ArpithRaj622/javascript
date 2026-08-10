const prices = [1000, 2000, 3000, 4000];

function transformPrices(prices, addGST) {
    prices.forEach((price) => {
        console.log(addGST(price));
    });
}

function addGST(price) {
    return price + (price * 18/100);
}

transformPrices(prices, addGST);