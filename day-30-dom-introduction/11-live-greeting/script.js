const input = document.querySelector("input");
const greetBtn = document.querySelector(".greet-btn");
const h2 = document.querySelector("h2");

greetBtn.addEventListener("click", () => {
    const userName = input.value;
    h2.textContent = `Hello, ${userName}`;
});