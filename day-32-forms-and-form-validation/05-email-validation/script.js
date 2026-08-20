const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const form = document.querySelector("form");
const input = document.querySelector("input");
const para = document.querySelector("p");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const inputValue = input.value.trim();
    if (inputValue === "") {
        para.textContent = "Email is required!";
    }else if (emailPattern.test(inputValue)){
        para.textContent = "Valid email";
    } else {
        para.textContent = "Invalid email";
    }
});