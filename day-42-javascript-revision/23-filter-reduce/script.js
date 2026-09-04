const orders = [
  { product: "Laptop", amount: 50000, status: "completed" },
  { product: "Mouse", amount: 800, status: "cancelled" },
  { product: "Monitor", amount: 12000, status: "completed" },
  { product: "Keyboard", amount: 1500, status: "cancelled" }
];

const completedOrders = orders.filter((order) => {
    return order.status === "completed";
});

const completedOrdersTotalAmt = completedOrders.reduce((acc, order) => {
    return acc + order.amount;
}, 0);

console.log(completedOrdersTotalAmt);