const products = [
    {name : "Laptop", price : 90000, stock : 10},
    {name : "Playstation 5", price : 50000, stock : 20},
    {name : "Headphones", price : 9000, stock : 30},
    {name : "Gaming Chair", price : 20000, stock : 30}
];

let inventoryValue = 0;

for (const product of products) {
    inventoryValue += (product.price * product.stock);
}

console.log(`Total Inventory Value = ${inventoryValue}`);