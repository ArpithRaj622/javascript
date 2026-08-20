const form = document.querySelector("form");
const input = document.querySelector("input");
const para = document.querySelector("p");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const inputValue = input.value.trim();
    if (inputValue === "") {
        para.textContent = "Username is required!";
    } else if (inputValue.length < 3) {
        para.textContent = "Username must be at least 3 characters!";
    } else {
        para.textContent = "Username accepted!";
    }
});