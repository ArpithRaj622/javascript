const jsonProducts = '[{"name":"Laptop","price":50000,"category":"electronics"},{"name":"Shirt","price":1500,"category":"clothing"},{"name":"Phone","price":25000,"category":"electronics"},{"name":"Shoes","price":3000,"category":"clothing"}]';

const products = JSON.parse(jsonProducts);

const electronics = products.filter((product) => {
    return product.category === "electronics";
});

const electronicsNames = electronics.map((electronic) => {
    return electronic.name;
});

console.log(electronicsNames);