const cart = [70000, 500, 1500, 12000];

let totalValue = 0;

for (let i = 0; i < cart.length; i++) {
    totalValue += cart[i];
}

console.log(`Total Cart Value = ₹${totalValue}`);