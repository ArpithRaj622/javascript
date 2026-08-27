const jsonProducts = '[{"name":"Laptop","price":50000},{"name":"Phone","price":20000},{"name":"Headphones","price":3000}]';

const products = JSON.parse(jsonProducts);

const discountedProducts = products.map((product) => {
    const discountedPrice = product.price - (product.price * 10 / 100);
    return {
        name : product.name,
        price : product.price,
        discountedPrice : discountedPrice
    };
});

const discountedProductsJson = JSON.stringify(discountedProducts);

console.log(discountedProductsJson);