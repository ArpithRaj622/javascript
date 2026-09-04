const products = [
  { name: "Laptop", price: 50000 },
  { name: "Mouse", price: 800 },
  { name: "Keyboard", price: 1500 }
];

products.forEach((product) => {
    console.log(`${product.name} - ${product.price}`);
});