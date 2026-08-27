const jsonData = '{"user":{"name":"Arpith","email":"arpith@example.com"},"orders":[{"id":101,"total":5000},{"id":102,"total":3000}]}';

const data = JSON.parse(jsonData);

const orderIds = data.orders.map((order) => {
    return order.id;
} );

const totalOrders = data.orders.reduce((acc, order) => {
    return acc + order.total;
}, 0);

console.log(data.user.name);
console.log(data.user.email);
console.log(orderIds);
console.log(totalOrders);