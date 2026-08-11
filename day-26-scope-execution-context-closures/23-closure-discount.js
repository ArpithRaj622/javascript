function createDiscountCalculator(discount) {
    function calculatePrice(price) {
        console.log(price - (price * discount/100));
    }

    return calculatePrice;
}

let discount10 = createDiscountCalculator(10);
let discount20 = createDiscountCalculator(20);

discount10(1000);
discount20(1000);
discount10(2000);