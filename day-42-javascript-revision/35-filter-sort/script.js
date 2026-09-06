const products = [
  { name: "Laptop", price: 50000, inStock: true },
  { name: "Mouse", price: 800, inStock: false },
  { name: "Monitor", price: 12000, inStock: true },
  { name: "Keyboard", price: 1500, inStock: true }
];

const inStockProducts = products.filter(product => product.inStock);

const sortByPriceHighToLow = inStockProducts.sort((product1, product2) => {
    return product2.price - product1.price;
});

console.log(sortByPriceHighToLow);