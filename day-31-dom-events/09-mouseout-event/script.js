const box = document.querySelector(".box");
const para = document.querySelector(".para");

box.addEventListener("mouseover", () => {
    para.textContent = "Mouse is over the box!"
});

box.addEventListener("mouseout", () => {
    para.textContent = "Mouse left the box!";
});