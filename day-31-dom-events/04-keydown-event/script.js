const input = document.querySelector("input");
const para = document.querySelector("p");

input.addEventListener("keydown", (event) => {
    para.textContent = `You pressed : ${event.key}`;
});