const jsonData = '{"name":"Arpith","cart":[{"product":"Laptop","price":50000},{"product":"Mouse","price":1000},{"product":"Keyboard","price":2000}]}';

const user = JSON.parse(jsonData);

const productNames = user.cart.map((cartItem) => {
    return cartItem.product;
});

const totalPrice = user.cart.reduce((acc, cartItem) => {
    return acc + cartItem.price;
}, 0);

console.log(user.name);
console.log(productNames);
console.log(totalPrice);