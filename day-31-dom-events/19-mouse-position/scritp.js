const box = document.querySelector(".box");
const para = document.querySelector("p");

box.addEventListener("mousemove", (event) => {
    para.textContent = `${event.clientX} ${event.clientY};`
});