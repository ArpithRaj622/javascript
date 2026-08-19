const form = document.querySelector("form");
const formInput = document.querySelector("input");
const para = document.querySelector("p");


form.addEventListener("submit", (event) => {
    event.preventDefault();
    const inputValue = formInput.value;
    para.textContent = inputValue;
});