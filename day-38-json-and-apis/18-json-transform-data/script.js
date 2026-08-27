const jsonProducts = '[{"name":"Laptop","price":50000,"available":true},{"name":"Phone","price":20000,"available":false},{"name":"Monitor","price":15000,"available":true}]';

const products = JSON.parse(jsonProducts);

const availableProducts = products.filter((product) => {
    return product.available === true;
});

const availableProductsDetails = availableProducts.map((product) => {
    return {
        name : product.name,
        price : product.price
    }
});

const availableProductsJson = JSON.stringify(availableProductsDetails);

console.log(availableProductsJson);