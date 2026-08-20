const form = document.querySelector("form");
const input = document.querySelector("input");
const para = document.querySelector("p");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const inputValue = input.value.trim();
    if (inputValue === "") {
        para.textContent = "Name is required!";
    } else {
        para.textContent = "Form submitted!";
        console.log(inputValue);
    }
});