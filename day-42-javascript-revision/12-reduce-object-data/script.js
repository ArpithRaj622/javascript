const orders = [
  { product: "Laptop", amount: 50000 },
  { product: "Mouse", amount: 800 },
  { product: "Keyboard", amount: 1500 },
  { product: "Monitor", amount: 12000 }
];

const total = orders.reduce((acc, product) => {
    return acc + product.amount;
}, 0);

console.log(total);