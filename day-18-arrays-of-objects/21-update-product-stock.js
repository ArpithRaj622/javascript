const products = [
    {name : "Laptop", price : 90000, stock : 10},
    {name : "Playstation 5", price : 50000, stock : 20},
    {name : "Headphones", price : 9000, stock : 30},
    {name : "Gaming Chair", price : 20000, stock : 30}
];

const newStockProduct = "Laptop";
const stockIncreaseBy = 10;

for (const product of products) {
    if (product.name === newStockProduct) {
        product.stock += stockIncreaseBy;
    }
}

console.log(products);