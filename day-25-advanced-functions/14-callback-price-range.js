const products = [
    { name: "Laptop", price: 90000 },
    { name: "Mouse", price: 2000 },
    { name: "Keyboard", price: 3500 },
    { name: "Monitor", price: 15000 },
    { name: "Phone", price: 60000 }
];

function filterProducts(products, isMidRange) {
    for (let i = 0; i < products.length; i++) {
        let midRange = isMidRange(products[i].price);
        if (midRange) {
            console.log(products[i].name);
        }
    }
}

function isMidRange(price) {
    if (price >= 10000 && price <= 50000) {
        return true;
    } else {
        return false;
    }
}

filterProducts(products, isMidRange);