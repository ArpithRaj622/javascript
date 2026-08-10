const prices = [1000, 2500, 5000, 8000];

function processPrices(prices, applyDiscount) {
    prices.forEach((price)=> {
        console.log(applyDiscount(price));
    });
}

function applyDiscount(price) {
    return price - (price * 10/100);
}

processPrices(prices, applyDiscount);