const prices = [1200, 2500, 800, 1500];

let totalPrice = 0;

prices.forEach((price) => {
    totalPrice += price;
});

console.log(totalPrice);