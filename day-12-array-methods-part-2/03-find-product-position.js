const products = ["Laptop", "Mouse", "Keyboard", "Monitor", "Printer"];

const productToFind = "Monitor";

const productPosition = products.indexOf(productToFind);


if (productPosition === -1) {
    console.log(`${productToFind} not found`);
} else {
    console.log(`${productToFind} found at position ${productPosition}`);
}