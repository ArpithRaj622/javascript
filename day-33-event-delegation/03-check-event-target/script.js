const container = document.querySelector(".container");
const result = document.querySelector(".result");

container.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
        result.textContent = `You clicked: ${event.target.textContent}`;
    }
});