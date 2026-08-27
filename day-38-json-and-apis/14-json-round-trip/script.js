const product = {
    name: "Laptop",
    price: 50000,
    available: true
};

const jsonProduct = JSON.stringify(product);

const parsedProduct = JSON.parse(jsonProduct);

parsedProduct.price = 45000;

console.log(parsedProduct);