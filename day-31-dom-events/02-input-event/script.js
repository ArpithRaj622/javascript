const input = document.querySelector("input");
const para = document.querySelector("p");

input.addEventListener("input", () => {
    para.textContent = input.value;
});