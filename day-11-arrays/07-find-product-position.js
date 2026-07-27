const productPrices = [70000, 500, 1500, 12000, 95000, 25000, 8000, 40000];

const produtToFind = 12000;

let foundProductPosition;


for (let i = 0; i < productPrices.length; i++) {
    if (productPrices[i] === produtToFind) {
        foundProductPosition = i;
        break;
    }
}

console.log(`Product Found at Index = ${foundProductPosition}`);