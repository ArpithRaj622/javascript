const products = [
  { name: "Laptop", price: 50000, stock: 5 },
  { name: "Mouse", price: 800, stock: 0 },
  { name: "Keyboard", price: 1500, stock: 12 },
  { name: "Monitor", price: 12000, stock: 3 }
];

const productOutofStock = products.find((product) => {
    return product.stock === 0;
});

console.log(productOutofStock.name);