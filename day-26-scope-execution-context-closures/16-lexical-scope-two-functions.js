let discount = 10;

function createPriceCalculator() {
    let discount = 20;

    function calculatePrice(price) {
        console.log(price - (price * discount/100));
    }

    return calculatePrice;
}

let fn = createPriceCalculator();

fn(1000);