const jsonProducts = '[{"name":"Laptop","price":50000},{"name":"Phone","price":20000},{"name":"Monitor","price":15000},{"name":"Keyboard","price":3000}]';

const products = JSON.parse(jsonProducts);

const sortedProducts = products.sort((a, b) => {
    return a.price - b.price;
});

const sortedProductsJson = JSON.stringify(sortedProducts);

console.log(sortedProductsJson);