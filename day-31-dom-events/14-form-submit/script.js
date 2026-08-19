const form = document.querySelector("form");
const submitBtn = document.querySelector(".submit-btn");
const para = document.querySelector("p");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    para.textContent = "Form submitted!";
});