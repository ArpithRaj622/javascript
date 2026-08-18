const box = document.querySelector(".box");
const styleBtn = document.querySelector(".style-btn");

styleBtn.addEventListener("click", () => {
    box.style.backgroundColor = "blue";
    box.style.fontSize = "24px";
});