const productName = document.querySelectorAll(".product-name");
const productPrice = document.querySelectorAll(".product-price");
const selectBtns = document.querySelectorAll(".select-btn");

selectBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        btn.textContent = "Selected";
    });
});