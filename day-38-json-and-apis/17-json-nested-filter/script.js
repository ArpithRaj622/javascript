const jsonData = '{"name":"Arpith","orders":[{"id":101,"status":"completed"},{"id":102,"status":"pending"},{"id":103,"status":"completed"}]}';

const data = JSON.parse(jsonData);

const completedOrders = data.orders.filter((order) => {
    return order.status === "completed";
});

console.log(completedOrders);