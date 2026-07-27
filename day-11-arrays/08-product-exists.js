const productPrices = [70000, 500, 1500, 12000, 95000, 25000, 8000, 40000];

const productToFind = 18000;

let foundProduct = false;

for (let i = 0; i < productPrices.length; i++) {
    if (productPrices[i] === productToFind) {
        foundProduct = true;
        break;
    }
}

if (foundProduct) {
    console.log("Product Available");
} else {
    console.log("Product Not Available");
}