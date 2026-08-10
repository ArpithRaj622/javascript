const products = [
    { name: "Laptop", price: 90000 },
    { name: "Mouse", price: 2000 },
    { name: "Keyboard", price: 3500 },
    { name: "Monitor", price: 15000 }
];

function calculatePrices(prices, addGST) {
    products.forEach((product) => {
        console.log(addGST(product.price));
    });
}

function addGST(price) {
    return price + (price * 18/100);
}

calculatePrices(products, addGST);