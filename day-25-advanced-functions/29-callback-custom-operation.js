const prices = [1000, 2000, 3000, 4000];

function calculatePrices(prices, applyDiscountAndGST) {
    prices.forEach((price) => {
        console.log(applyDiscountAndGST(price));
    });
}

function applyDiscountAndGST(price) {
    let discountedPrice = price - (price * 10/100);
    let gst = discountedPrice * 18/100;
    let finalPrice = discountedPrice + gst;
    return finalPrice;
}

calculatePrices(prices, applyDiscountAndGST);
