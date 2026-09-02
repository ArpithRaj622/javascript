const products = [
  { name: "Laptop", price: 50000 },
  { name: "Mouse", price: 800 },
  { name: "Monitor", price: 12000 },
  { name: "Keyboard", price: 1500 }
];

const prodPriceLowToHigh = products.sort((a, b) => {
    return a.price - b.price;
});

console.log(prodPriceLowToHigh);