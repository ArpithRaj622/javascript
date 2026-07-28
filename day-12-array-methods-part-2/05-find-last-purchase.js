const products = ["Laptop", "Mouse", "Keyboard", "Laptop", "Monitor"];

const productToFind = "Laptop";

const productLastPosition = products.lastIndexOf(productToFind);

if (productLastPosition === -1) {
    console.log(`${productToFind} not found`);
} else {
    console.log(`Last Position of ${productToFind} = ${productLastPosition}`);
}