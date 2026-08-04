const products = [
    { name: "Laptop", price: 65000, category: "Electronics" },
    { name: "Notebook", price: 120, category: "Stationery" },
    { name: "Phone", price: 30000, category: "Electronics" },
    { name: "Pen", price: 20, category: "Stationery" },
    { name: "Tablet", price: 45000, category: "Electronics" }
];

const expensiveElectronics = products.filter((product) => {
    return product.category === "Electronics" && product.price >= 40000;
});

console.log(expensiveElectronics);