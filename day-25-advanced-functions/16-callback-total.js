const prices = [1200, 2500, 800, 1500];

function calculateTotal(prices, getPriceWithGST) {
    let totalPrice = 0;
    for (let i = 0; i < prices.length; i++){
        totalPrice += getPriceWithGST(prices[i]);
    }

    console.log(totalPrice);
}

function getPriceWithGST(price) {
    return price + (price * 18/100);
}

calculateTotal(prices, getPriceWithGST);