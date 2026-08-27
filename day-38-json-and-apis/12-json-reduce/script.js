const jsonOrders = '[{"product":"Laptop","price":50000,"quantity":1},{"product":"Mouse","price":1000,"quantity":2},{"product":"Keyboard","price":2000,"quantity":1}]';

const orders = JSON.parse(jsonOrders);

const total = orders.reduce((acc, order) => {
    return acc + (order.price * order.quantity);
}, 0);

console.log(total);