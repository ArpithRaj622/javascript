const oldPrice = {
    price : 500,
    stock : 20
};

const newPrice = {
    price : 450
};

const product = {...oldPrice, ...newPrice};

console.log(product);