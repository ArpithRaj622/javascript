const productName = document.querySelector(".product-name");
const productPrice = document.querySelector(".product-price");
const discountBtn = document.querySelector(".discount-btn");

discountBtn.addEventListener("click", () => {
    let price = Number(productPrice.textContent);
    let discount = price * 10 / 100;
    let finalPrice = price - discount;

    productPrice.textContent = `${finalPrice}`;
});