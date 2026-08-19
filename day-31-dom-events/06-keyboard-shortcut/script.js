const input = document.querySelector("input");
const para = document.querySelector("p");

input.addEventListener("keydown", (event) => {
    if (event.key === "s" && event.ctrlKey) {
        para.textContent = "Saved!";
    }
});