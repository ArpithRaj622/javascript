const form = document.querySelector("form");
const input = document.querySelector("input");
const para = document.querySelector("p");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const inputValue = input.value.trim();
    if (inputValue === "") {
        para.textContent = "Password is required!";
    } else if (inputValue.length < 8) {
        para.textContent = "Password must be at least 8 characters!";
    } else {
        para.textContent = "Password accepted!";
    }
});