const products = [
  { name: "Laptop", price: 50000, inStock: true },
  { name: "Mouse", price: 800, inStock: true },
  { name: "Keyboard", price: 1500, inStock: true },
  { name: "Monitor", price: 12000, inStock: true }
];

const allInStock = products.every((product) => {
    return product.inStock === true;
});

console.log(allInStock);