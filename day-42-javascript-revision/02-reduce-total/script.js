const cart = [
    { name: "Laptop", price: 60000, quantity: 1 },
    { name: "Mouse", price: 1500, quantity: 2 },
    { name: "Keyboard", price: 3000, quantity: 1 }
];

const total = cart.reduce((acc, item) => {
    return acc + (item.price * item.quantity);
}, 0);

console.log(total);