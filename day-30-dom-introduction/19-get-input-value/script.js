const input = document.querySelector("input");
const submitBtn = document.querySelector(".submit-btn");
const para = document.querySelector("p");

submitBtn.addEventListener("click", () => {
    const inputValue = input.value;
    para.textContent = inputValue;
});