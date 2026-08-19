const input = document.querySelector("input");
const para = document.querySelector("p");

input.addEventListener("focus", () => {
    para.textContent = "Input focused!";
});