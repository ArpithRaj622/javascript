const jsonData = '[{"name":"Laptop","price":50000,"stock":5},{"name":"Phone","price":20000,"stock":0},{"name":"Monitor","price":15000,"stock":3}]';

const products = JSON.parse(jsonData);

products[0].price = 45000;

const inStockProducts = products.filter((product) => {
    return product.stock > 0;
});

const inStockProductsJson = JSON.stringify(inStockProducts);

console.log(inStockProductsJson);