const products = [
  { name: "Laptop", price: 50000, category: "electronics" },
  { name: "T-Shirt", price: 800, category: "clothing" },
  { name: "Phone", price: 30000, category: "electronics" }
];

const firstElectronicProduct = products.find(product => product.category === "electronics");

const {name, price} = firstElectronicProduct;

console.log(`${name} - ${price}`);