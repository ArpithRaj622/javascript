let products = ["Laptop", "Mouse", "Keyboard"];

products.push("Monitor");
products.unshift("Gaming Laptop");
products.pop();

let totalProducts = products.length;

console.log(products);
console.log(`Total Products = ${totalProducts}`);