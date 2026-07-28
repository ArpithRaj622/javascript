const products = ["Laptop", "Mouse", "Keyboard", "Monitor"];

const toFind = "Monitor";

const productAvailable = products.includes(toFind);

if (productAvailable) {
    console.log(`${toFind} is available`);
} else {
    console.log(`${toFind} is not available`);
}