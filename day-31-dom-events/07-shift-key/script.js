const input = document.querySelector("input");
const para = document.querySelector("p");

input.addEventListener("keydown", (event) => {
    if (event.shiftKey) {
        para.textContent = "Shift is being held!";
    }
});