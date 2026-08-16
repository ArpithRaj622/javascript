const box = document.querySelector(".container");
const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", () => {
    box.classList.toggle("dark");
});