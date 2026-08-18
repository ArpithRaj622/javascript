const productCard = document.querySelector(".product-card");
const showBtn = document.querySelector(".show-btn");

showBtn.addEventListener("click", () => {
    productCard.innerHTML = "<h2>Laptop</h2><p>₹60,000</p><p>In Stock</p>";
});