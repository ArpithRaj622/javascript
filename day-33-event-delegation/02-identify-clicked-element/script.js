const container = document.querySelector(".container");
const para = document.querySelector("p");

container.addEventListener("click", (event) => {
    para.textContent = `You clicked: ${event.target.textContent}`;
});