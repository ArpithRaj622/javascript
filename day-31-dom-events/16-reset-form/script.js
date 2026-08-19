const form = document.querySelector("form");
const input = document.querySelector("input");
const para = document.querySelector("p");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const inputValue = input.value;
    para.textContent = inputValue;
    form.reset();
});