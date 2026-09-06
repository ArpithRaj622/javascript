const orders = [
  { product: "Laptop", category: "electronics", amount: 50000 },
  { product: "Mouse", category: "electronics", amount: 800 },
  { product: "T-Shirt", category: "clothing", amount: 1200 },
  { product: "Jeans", category: "clothing", amount: 2000 }
];

const electronics = orders.filter(order => order.category === "electronics");
const electronicsPrice = electronics.reduce((acc, product) => {
    return acc + product.amount;
}, 0);

const clothing = orders.filter(order => order.category === "clothing");
const clothingPrice = clothing.reduce((acc, product) => {
    return acc + product.amount;
}, 0);

const electronicsAndClothingPrice = {
    electronics : electronicsPrice,
    clothing : clothingPrice
}

console.log(electronicsAndClothingPrice);