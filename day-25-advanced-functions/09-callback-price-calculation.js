const price = 1000;

function calculatePrice(price, callback) {
    let finalprice = callback(price);
    console.log(finalprice);
}

function addTax(price) {
    return price + (price * 18 / 100);
}

calculatePrice(price, addTax);