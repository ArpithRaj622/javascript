const products = [
    { name: "Laptop", price: 90000 },
    { name: "Mouse", price: 2000 },
    { name: "Keyboard", price: 3500 },
    { name: "Monitor", price: 15000 }
];

function findProduct(products, isExpensive) {
    for (let i = 0; i < products.length; i++) {
        let expensive = isExpensive(products[i].price);
        if (expensive) {
            console.log(products[i].name);
            break;
        }
    }
}

function isExpensive(price) {
    if (price > 50000) {
        return true;
    } else {
        return false;
    }
}

findProduct(products, isExpensive);