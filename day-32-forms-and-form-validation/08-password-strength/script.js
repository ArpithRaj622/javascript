const form = document.querySelector("form");
const input = document.querySelector("input");
const para = document.querySelector("p");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const password = input.value.trim();
    if (password === "") {
        para.textContent = "Password is required!";
    } else if (password.length < 8) {
        para.textContent = "Password must be at least 8 characters!";
    } else {
        para.textContent = "Password is strong enough!";
    }
});