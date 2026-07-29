const products = ["Laptop", "Mouse", "Keyboard", "Monitor"];

const onSaleProducts = products.splice(1, 2);

console.log("Updated Inventory:");
console.log(products);

console.log();

console.log("Products on Sale:");
console.log(onSaleProducts);