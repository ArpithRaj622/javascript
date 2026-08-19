const form = document.querySelector("form");
const input = document.querySelector("input");
const para = document.querySelector("p");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const inputValue = input.value;
    if (inputValue === "") {
        para.textContent = "Please enter something.";
    } else {
        para.textContent = inputValue;
    }
    form.reset();
});